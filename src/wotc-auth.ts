require('isomorphic-fetch');

export type TokenResponse = {
  "access_token": string
  "refresh_token": string
  "expires_in": number,
  "token_type": string,
  "client_id": string,
  "game_id": string,
  "domain_id": string,
  "persona_id": string,
  "account_id": string,
  "display_name": string
}

export class WotcAuth {
  private accessToken: string | null = null;
  private refreshToken: string | null = null;
  private expiresAt: number = -1;

  private username = '';
  private password = '';

  public get authToken() {
    if(!this.accessToken || this.expiresAt < Date.now()) {
      if(this.refreshToken) {
        return this.refresh().then((auth) => auth.access_token);
      } else {
        throw new Error('Not logged in');
      }
    } else {
      return Promise.resolve(this.accessToken);
    }
  }

  public login(username: string, password: string) {
    this.username = username;
    this.password = password;
    return WotcAuth.getWotcLogin(username, password).then((stepOneToken) => {
      this.refreshToken = stepOneToken.refresh_token;
      return WotcAuth.getEventLinkNonce(stepOneToken.access_token);
    }).then((stepTwoNonce) => {
      return WotcAuth.exchangeNonceForToken(stepTwoNonce);
    }).then((auth) => {
      this.accessToken = auth.access_token;
      this.expiresAt = Date.now() + ((auth.expires_in - 10) * 1000);
      return auth;
    });
  }

  private refresh() {
    return fetch('https://api.platform.wizards.com/auth/oauth/token', {
      method: 'POST',
      headers: {
        Authorization: 'Basic TnpuU2h3S21MUE1FcllrZnV2eXluZkE5OnIyUmd4ODlhQ0ZUZmpiajdUVTU5c0w4cQ==',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "grant_type": "refresh_token",
        "refresh_token": this.refreshToken,
      })
    }).then((resp) => resp.json()).catch((err) => {
      console.warn('Refresh error, getting new auth using username and password: ', err);
      return WotcAuth.getWotcLogin(this.username, this.password);
    }).then((stepOneToken: TokenResponse) => {
      this.refreshToken = stepOneToken.refresh_token;
      return WotcAuth.getEventLinkNonce(stepOneToken.access_token);
    }).then((stepTwoNonce) => {
      return WotcAuth.exchangeNonceForToken(stepTwoNonce);
    }).then((auth) => {
      this.accessToken = auth.access_token;
      this.expiresAt = Date.now() + ((auth.expires_in - 300) * 1000); // Have to take 5 minutes off because WebSocket only updates every 5 minutes // TODO is there a better way to do this proactively?
      return auth;
    });
  }

  private static getWotcLogin(username: string, password: string) {
    return fetch('https://api.platform.wizards.com/auth/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        "grant_type": "password",
        "username": username,
        "password": password
      }),
      headers: {
        Authorization: 'Basic TnpuU2h3S21MUE1FcllrZnV2eXluZkE5OnIyUmd4ODlhQ0ZUZmpiajdUVTU5c0w4cQ==',
        'Content-Type': 'application/json',
      }
    }).then((resp) => resp.json()) as Promise<TokenResponse>;
  }

  private static getEventLinkNonce(access_token: string) {
    return fetch('https://api.platform.wizards.com/exchange/gameID/eventreporter', {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    }).then((resp) => resp.json()).then((data: {nonce: string}) => data.nonce);
  }

  private static exchangeNonceForToken(nonce: string) {
    return fetch('https://api.platform.wizards.com/auth/oauth/token', {
      method: 'POST',
      body: JSON.stringify({
        "grant_type": "exchange",
        "ticket": nonce
      }),
      headers: {
        Authorization: 'Basic V0pSWURITkdST0laSEw4QjpWNVZYSzZGTEcxWUkwR0QyWFkzSA==',
        'Content-Type': 'application/json',
      }
    }).then((resp) => resp.json()) as Promise<TokenResponse>;
  }
}
