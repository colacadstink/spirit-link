import {ApolloClient, createHttpLink, InMemoryCache, NormalizedCacheObject, split} from '@apollo/client/core';
import {setContext} from '@apollo/client/link/context';
import {WebSocketLink} from '@apollo/client/link/ws';
import gql from 'graphql-tag';
import {Subject} from 'rxjs';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import {
  EventFilter,
  Mutation,
  MutationRegisterPlayerByEmailArgs,
  MutationSetRegisteredPlayerNameArgs,
  Query,
  QueryEventArgs,
  QueryEventPageArgs,
  Registration,
  SetRegisteredPlayerNameInput,
  Subscription,
  SubscriptionPlayerRegisteredArgs
} from './eventlink.types';
import {WotcAuth} from './wotc-auth';

const WebSocket = require('isomorphic-ws');

const EVENTLINK_GQL_URL_HTTPS = 'https://api.tabletop.wizards.com/silverbeak-griffin-service/graphql';
const EVENTLINK_GQL_URL_WSS = 'wss://api.tabletop.wizards.com/silverbeak-griffin-service/graphql';

export class EventlinkClient {
  public client: ApolloClient<NormalizedCacheObject>;

  constructor(public wotcAuth?: WotcAuth) {}

  public async login(email: string, password: string) {
    this.wotcAuth = new WotcAuth();
    await this.wotcAuth.login(email, password);
    await this.init();
  }

  public async init() {
    const authLink = setContext(async (_, { headers }) => {
      const token = await this.wotcAuth.authToken;
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });

    const httpLink = createHttpLink({
      uri: EVENTLINK_GQL_URL_HTTPS,
    });

    const subClient = new SubscriptionClient(EVENTLINK_GQL_URL_WSS, {
      reconnect: true,
      connectionParams: async () => {
        const wsToken = await this.wotcAuth.authToken;
        return {
          Authorization: `Bearer ${wsToken}`,
          headers: {
            Authorization: `Bearer ${wsToken}`,
          }
        };
      },
    }, WebSocket, 'graphql-ws');
    const wsLink = new WebSocketLink(subClient);

    const link = split(
      // split based on operation type
      (op) => {
        const definition = op.query.definitions[0];
        if(definition.kind === 'OperationDefinition') {
          return definition.operation === 'subscription';
        }
        return false;
      },
      wsLink,
      authLink.concat(httpLink)
    );

    this.client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    });
  }

  public getMe() {
    return this.client.query<Query>({
      query: gql`query MyInfo {
          me {
              displayName
              emailAddress
              firstName
              lastName
              roles {
                  organization {
                      id
                      name
                  }
              }
          }
      }`
    }).then(result => result.data.me);
  }

  public getUpcomingEvents(organizationId: string) {
    const filter: EventFilter = {
      startDate: new Date().toISOString(),
    };
    return this.client.query<Query, QueryEventPageArgs>({
      query: gql`query UpcomingEvents($organizationId: ID!, $filter: EventFilter) {
          eventPage(organizationId: $organizationId, filter: $filter) {
              events {
                  id,
                  scheduledStartTime,
                  title
              }
          }
      }`,
      variables: { filter, organizationId }
    }).then(result => result.data.eventPage);
  }

  public getPlayersInEvent(id: string) {
    return this.client.query<Query, QueryEventArgs>({
      query: gql`query PlayersInEvent($id: ID!) {
          event(id: $id) {
              id,
              scheduledStartTime,
              title,
              registeredPlayers {
                  emailAddress
                  firstName
                  lastName
              }
          }
      }`,
      variables: { id }
    }).then(result => result.data.event.registeredPlayers);
  }

  public registerPlayerByEmail(eventId: string, emailAddress: string) {
    return this.client.mutate<Mutation, MutationRegisterPlayerByEmailArgs>({
      mutation: gql`mutation RegisterPlayerByEmail($eventId: ID!, $emailAddress: String!) {
          registerPlayerByEmail(eventId: $eventId, emailAddress: $emailAddress) {
              registeredPlayers {
                  id
                  firstName
                  lastName
              }
          }
      }`,
      variables: { eventId, emailAddress }
    }).then((result) => {
      const players = result.data.registerPlayerByEmail.registeredPlayers;
      return {
        success: true,
        players
      };
    }, () => {
      return {
        success: false,
        players: null as Registration[]
      };
    });
  }

  public setRegisteredPlayerName(input: SetRegisteredPlayerNameInput) {
    return this.client.mutate<Mutation, MutationSetRegisteredPlayerNameArgs>({
      mutation: gql`mutation SetRegisteredPlayerName($input: SetRegisteredPlayerNameInput!) {
          setRegisteredPlayerName(input: $input) {
              id
              firstName
              lastName
          }
      }`,
      variables: { input }
    }).then((result) => {
      return result.data.setRegisteredPlayerName;
    });
  }

  public subscribeToPlayerRegistered(eventId: string) {
    const playerRegisteredSubject = new Subject<Registration>();
    const obs = this.client.subscribe<Subscription, SubscriptionPlayerRegisteredArgs>({
      query: gql`subscription PlayerRegistered($eventId: ID!) {
          playerRegistered(eventId: $eventId) {
              addedPlayer {
                  id,
                  personaId,
                  emailAddress,
                  firstName,
                  lastName
              }
          }
      }`,
      variables: {
        eventId
      }
    });
    obs.map((result) => result.data.playerRegistered.addedPlayer).subscribe(playerRegisteredSubject);
    return playerRegisteredSubject.asObservable();
  }
}
