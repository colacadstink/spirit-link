import 'symbol-observable'; // This needs to be before we import any RxJS stuff.

import {
  ApolloClient,
  createHttpLink,
  FetchPolicy,
  InMemoryCache,
  NormalizedCacheObject,
  split
} from '@apollo/client/core';
import {setContext} from '@apollo/client/link/context';
import {WebSocketLink} from '@apollo/client/link/ws';
import gql from 'graphql-tag';
import {from, Observable, throwError} from 'rxjs';
import {SubscriptionClient} from 'subscriptions-transport-ws';
import {
  EventFilter,
  EventStatus,
  Mutation, MutationCreateTeamArgs, MutationRegisterGuestPlayerArgs,
  MutationRegisterPlayerByEmailArgs,
  MutationSetRegisteredPlayerNameArgs,
  Query,
  QueryEventArgs,
  QueryEventPageArgs,
  QueryTimerArgs,
  Registration, RegistrationUpdatedPayload,
  ReservationNotificationPayload,
  Round,
  SetRegisteredPlayerNameInput,
  Subscription,
  SubscriptionEventReservationCancelledArgs,
  SubscriptionEventReservedArgs,
  SubscriptionGameResultReportedArgs,
  SubscriptionPlayerRegisteredArgs, SubscriptionRegistrationUpdatedArgs,
  SubscriptionRunningEventUpdatedArgs,
  SubscriptionTeamDroppedArgs,
  SubscriptionTimerUpdatedArgs, TeamPlayerInput,
  Timer,
  User
} from './eventlink.types';
import {WotcAuth} from './wotc-auth';
import {catchError} from 'rxjs/operators';

const WebSocket = require('isomorphic-ws');

const EVENTLINK_GQL_URL_HTTPS = 'https://api.tabletop.wizards.com/silverbeak-griffin-service/graphql';
const EVENTLINK_GQL_URL_WSS = 'wss://api.tabletop.wizards.com/silverbeak-griffin-service/graphql';

const ROUND_FIELDS = `{
    id,
    number,
    isCertified,
    isFinalRound,
    isPlayoff,
    pairingStrategy,
    actualStartTime,
    actualEndTime,
    timerID,
    matches {
        id,
        isBye,
        teams {
            id,
            name,
            players {
                displayName,
                firstName,
                lastName
            }
        },
        leftTeamWins,
        rightTeamWins,
        isLeftTeamDropped,
        isRightTeamDropped,
        tableNumber
    }
}`;

const GAME_STATE_CURRENT_ROUND = `
currentRound ${ROUND_FIELDS}`;
const GAME_STATE_ROUNDS = `
rounds ${ROUND_FIELDS}`;

export type RegResult = {
  success: false,
  players: null,
  err: any
} | {
  success: true,
  players: Registration[],
  err?: undefined
}

export class EventlinkClient {
  public client: ApolloClient<NormalizedCacheObject>;

  constructor(public wotcAuth?: WotcAuth) {}

  public async login(email: string, password: string) {
    this.wotcAuth = new WotcAuth();
    await this.wotcAuth.login(email, password);
    await this.init();
  }

  public async init() {
    await this.wotcAuth.authToken; // Don't set stuff up until this exists!
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
    subClient.onError((err) => {
      console.error('SubscriptionClient error:', err);
    })
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

  //region Queries
  public getMe(fetchPolicy: FetchPolicy = 'cache-first') {
    return this.client.query<Query>({
      fetchPolicy,
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

  public getEventInfo(id: string, fetchPolicy: FetchPolicy = 'cache-first', includeAllRounds = false) {
    return this.client.query<Query, QueryEventArgs>({
      fetchPolicy,
      query: gql`query PlayersInEvent($id: ID!) {
          event(id: $id) {
              id,
              title,
              description,
              rulesEnforcementLevel,
              pairingType,
              entryFee {
                  amount,
                  currency
              },
              scheduledStartTime,
              actualStartTime,
              estimatedEndTime,
              actualEndTime,
              status,
              capacity,
              numberOfPlayers,
              shortCode,
              tags,
              startingTableNumber,
              hasTop8,
              cardSet {
                  id,
                  name,
                  releaseDate
              },
              eventFormat {
                  blurb,
                  color,
                  id,
                  includesDeckbuilding,
                  includesDraft,
                  name,
                  requiresSetSelection
              },
              registeredPlayers {
                  firstName,
                  lastName,
                  id
              },
              interestedPlayers {
                  firstName,
                  lastName,
                  id
              },
              gameState {
                  ${GAME_STATE_CURRENT_ROUND},
                  ${includeAllRounds ? GAME_STATE_ROUNDS : ''}
                  draftTimerID,
                  constructDraftTimerID,
                  top8DraftTimerID,
                  standings {
                      team {
                          name,
                          players {
                              firstName,
                              lastName,
                          }
                      }
                      wins,
                      losses,
                      draws,
                      matchPoints,
                      opponentMatchWinPercent,
                      gameWinPercent,
                      opponentGameWinPercent
                  },
                  pods {
                      number,
                      seats {
                          firstName,
                          lastName,
                          personaId,
                      }
                  },
                  constructedSeats {
                      number,
                      firstName,
                      lastName,
                      personaId
                  }
              },
          }
      }`,
      variables: { id }
    }).then(result => result.data.event).then(_event =>  {
      const event = {..._event};
      if(event.gameState) {
        event.gameState = {...event.gameState};
      }
      if(event.gameState?.constructDraftTimerID === 'null') {
        event.gameState.constructDraftTimerID = null;
      }
      if(event.gameState?.draftTimerID === 'null') {
        event.gameState.draftTimerID = null;
      }
      if(event.gameState?.top8DraftTimerID === 'null') {
        event.gameState.top8DraftTimerID = null;
      }
      return event;
    });
  }

  public getUpcomingEvents(organizationId: string, fetchPolicy: FetchPolicy = 'cache-first') {
    const startDate = new Date();
    startDate.setHours(0, 0, 0);
    const filter: EventFilter = {
      startDate: startDate.toISOString(),
    };
    return this.client.query<Query, QueryEventPageArgs>({
      fetchPolicy,
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

  public getEvents(organizationId: string, filter: EventFilter, fetchPolicy: FetchPolicy = 'cache-first') {
    return this.client.query<Query, QueryEventPageArgs>({
      fetchPolicy,
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

  public getPlayersInEvent(id: string, fetchPolicy: FetchPolicy = 'cache-first') {
    return this.client.query<Query, QueryEventArgs>({
      fetchPolicy,
      query: gql`query PlayersInEvent($id: ID!) {
          event(id: $id) {
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

  public getTimerInfo(id: string, fetchPolicy: FetchPolicy = 'cache-first') {
    return this.client.query<Query, QueryTimerArgs>({
      fetchPolicy,
      query: gql`query TimerInfo($id: ID!) {
          timer(id: $id) {
              id
              state
              durationMs
              durationStartTime
              serverTime
          }
      }`,
      variables: { id }
    }).then(result => result.data.timer);
  }
  //endregion

  //region Mutations
  public registerPlayerByEmail(eventId: string, emailAddress: string): Promise<RegResult> {
    return this.client.mutate<Mutation, MutationRegisterPlayerByEmailArgs>({
      mutation: gql`mutation RegisterPlayerByEmail($eventId: ID!, $emailAddress: String!) {
          registerPlayerByEmail(eventId: $eventId, emailAddress: $emailAddress) {
              registeredPlayers {
                  personaId
                  id
                  firstName
                  lastName
                  emailAddress
              }
          }
      }`,
      variables: { eventId, emailAddress }
    }).then((result) => {
      const players = result.data.registerPlayerByEmail.registeredPlayers;
      return {
        success: true,
        players
      } as RegResult;
    }, (err) => {
      return {
        success: false,
        players: null as Registration[],
        err: err
      } as RegResult;
    });
  }

  public registerGuestPlayer(eventId: string, firstName: string, lastName: string) {
    return this.client.mutate<Mutation, MutationRegisterGuestPlayerArgs>({
      mutation: gql`mutation RegisterPlayerByEmail($eventId: ID!, $firstName: String!, $lastName: String!) {
          registerGuestPlayer(eventId: $eventId, firstName: $firstName, lastName: $lastName) {
              registeredPlayers {
                  personaId
                  id
                  firstName
                  lastName
                  emailAddress
              }
          }
      }`,
      variables: { eventId, firstName, lastName }
    }).then((result) => {
      const players = result.data.registerGuestPlayer.registeredPlayers;
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

  public createTeam(eventId: string, personaIds: string[]) {
    const players = personaIds.map((personaId) => {
      return {
        personaId
      } as TeamPlayerInput;
    })
    return this.client.mutate<Mutation, MutationCreateTeamArgs>({
      mutation: gql`mutation CreateTeam($eventId: ID!, $players: [TeamPlayerInput]) {
          createTeam(eventId: $eventId, players: $players) {
              id,
              teamCode,
              isRegistered
          }
      }`,
      variables: { eventId, players }
    }).then((result) => {
      return result.data.createTeam;
    });
  }
  //endregion

  //region Subscriptions
  private subErrorHandler = <T>(err: any) => {
    console.error('Subscription error: ', err);
    return throwError(err);
  }

  public subscribeToPlayerRegistered(eventId: string) {
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
    return (from(obs.map((result) => result.data.playerRegistered.addedPlayer)) as Observable<Registration>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToTeamDropped(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionTeamDroppedArgs>({
      query: gql`subscription TeamDropped($eventId: ID!) {
          teamDropped(eventId: $eventId) {
              droppedPlayer {
                  firstName,
                  lastName
              }
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.teamDropped.droppedPlayer)) as Observable<User>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToEventReserved(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionEventReservedArgs>({
      query: gql`subscription EventReserved($eventId: ID!) {
          eventReserved(eventId: $eventId) {
              firstName,
              lastName,
              reservationId
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.eventReserved)) as Observable<ReservationNotificationPayload>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToEventReservationCancelled(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionEventReservationCancelledArgs>({
      query: gql`subscription EventReservationCancelled($eventId: ID!) {
          eventReservationCancelled(eventId: $eventId) {
              firstName,
              lastName,
              reservationId
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.eventReservationCancelled)) as Observable<ReservationNotificationPayload>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToGameResultReported(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionGameResultReportedArgs>({
      query: gql`subscription GameResultReported($eventId: ID!) {
          gameResultReported(eventId: $eventId) {
              eventId,
              eventCreator {
                  firstName,
                  lastName,
                  displayName,
                  personaId
              },
              sender {
                  firstName,
                  lastName,
                  displayName,
                  personaId
              }
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.gameResultReported.eventId)) as Observable<string>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToRegistrationUpdated(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionRegistrationUpdatedArgs>({
      query: gql`subscription RegistrationUpdated($eventId: ID!) {
          registrationUpdated(eventId: $eventId) {
              firstName,
              lastName,
              registrationId
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.registrationUpdated)) as Observable<RegistrationUpdatedPayload>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToCurrentRound(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionRunningEventUpdatedArgs>({
      query: gql`subscription RunningEventUpdated($eventId: ID!) {
          runningEventUpdated(eventId: $eventId) {
              gameState {
                  ${GAME_STATE_CURRENT_ROUND}
              }
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.runningEventUpdated.gameState.currentRound)) as Observable<Round>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToRunningEventStatus(eventId: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionRunningEventUpdatedArgs>({
      query: gql`subscription RunningEventUpdated($eventId: ID!) {
          runningEventUpdated(eventId: $eventId) {
              status
          }
      }`,
      variables: {
        eventId
      }
    });
    return (from(obs.map((result) => result.data.runningEventUpdated.status)) as Observable<EventStatus>)
      .pipe(catchError(this.subErrorHandler));
  }

  public subscribeToTimer(id: string) {
    const obs = this.client.subscribe<Subscription, SubscriptionTimerUpdatedArgs>({
      query: gql`subscription TimerUpdated($id: ID!) {
          timerUpdated(id: $id) {
            id,
            serverTime,
            state,
            durationMs,
            durationStartTime
          }
      }`,
      variables: {
        id
      }
    });
    return (from(obs.map((result) => result.data.timerUpdated)) as Observable<Timer>)
      .pipe(catchError(this.subErrorHandler));
  }
  //endregion
}
