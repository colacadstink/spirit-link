import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  CurrencyCode: any;
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The string representation of a Magic card mana cost */
  MagicManaCost: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AcceptTermsAndConditionsInput = {
  /** When the Ts&Cs were accepted */
  acceptedAt: Scalars['DateTime'];
  /** The ID of the organization doing the accepting */
  id: Scalars['ID'];
};

export type AdminRoleChangedPayload = {
  __typename?: 'AdminRoleChangedPayload';
  /** The players display name whose role has been changed */
  displayName?: Maybe<Scalars['String']>;
  /** The players first name whose role has been changed */
  firstName?: Maybe<Scalars['String']>;
  /** The players last name whose role has been changed */
  lastName?: Maybe<Scalars['String']>;
  /** The player whose role has been changed */
  personaId: Scalars['ID'];
  /** The name of the role that was changed */
  roleName: Scalars['String'];
};

export type ApproveVenueInput = {
  /** The physical address of the venue. Required. */
  address: Scalars['String'];
  /** The maximum capacity of the venue. */
  capacity?: Maybe<Scalars['Int']>;
  /** City, part of the full physical address */
  city?: Maybe<Scalars['String']>;
  /** Country, part of the full physical address */
  country?: Maybe<Scalars['String']>;
  /** The email address of the venue. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The Google Place ID of the venue. */
  googlePlaceId?: Maybe<Scalars['String']>;
  /** The ID of the venue. Required. */
  id: Scalars['ID'];
  /** The latitude of the venue's physical location. Required. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of the venue's physical location. Required. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the venue. Should be unique in the scope of an organization. Required. */
  name: Scalars['String'];
  /** Any additional notes about the venue. */
  notes?: Maybe<Scalars['String']>;
  /** The phone number of the venue. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Postal Code, part of the full physical address */
  postalCode?: Maybe<Scalars['String']>;
  /** State/Territory, part of the full physical address */
  state?: Maybe<Scalars['String']>;
  /** The street address, part of the full physical address */
  streetAddress?: Maybe<Scalars['String']>;
  /** The time zone of the venue. Must be a valid IANA time zone identifier, e.g. 'America/Los_Angeles'. Required. */
  timeZone: Scalars['String'];
};

export type BatchCreateEventsInput = {
  /** A list of recurring events to create with the batch */
  recurringEvents: Array<CreateRecurringEventInput>;
  /** A list of single events to create with the batch */
  singleEvents: Array<CreateEventInput>;
};

export type BatchCreateResponse = {
  __typename?: 'BatchCreateResponse';
  /** A list of the errors that occurred while batch creating all of the events */
  errors: Array<Scalars['String']>;
  /** A list of the recurring events that were created with the batch */
  recurringEvents: Array<RecurringEventResponse>;
  /** A list of the single events that were created with the batch */
  singleEvents: Array<Event>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

/**
 * A CardQuantity is an entry in a deck, and represents a specific Magic card along
 * with how many of that card are in the deck,and section of the deck the card is in.
 */
export type CardQuantity = {
  __typename?: 'CardQuantity';
  card: MagicCard;
  cardId: Scalars['ID'];
  deckSection: DeckSection;
  quantity: Scalars['Int'];
};

/** A CardQuantityConnection provides paginated result set of magic cards. */
export type CardQuantityConnection = {
  __typename?: 'CardQuantityConnection';
  deckPageInfo: DeckPageInfo;
  nodes?: Maybe<Array<Maybe<CardQuantity>>>;
};

/** Input type for card and quantity of it. */
export type CardQuantityInput = {
  cardId: Scalars['ID'];
  deckSection: DeckSection;
  quantity: Scalars['Int'];
};

/** A card set */
export type CardSet = {
  __typename?: 'CardSet';
  /** The type-specific, unique-identifier of this card set */
  id: Scalars['ID'];
  /** The name of the set */
  name: Scalars['String'];
  /** When the set was released */
  releaseDate: Scalars['DateTime'];
};

export type CertifyRoundInput = {
  /** A collection of the results of all of the matches in the round. */
  matchResults: Array<MatchResultInput>;
  /** The round number. */
  number: Scalars['Int'];
};

export type CertifyRoundPayload = {
  __typename?: 'CertifyRoundPayload';
  event?: Maybe<Event>;
  gameState?: Maybe<GameState>;
};

/** The input type for changing a user's role within the scope of an organization. */
export type ChangeRoleInput = {
  organizationId: Scalars['ID'];
  personaId: Scalars['ID'];
  to: RoleName;
};

export type ClearPreferredTableNumberInput = {
  /** The ID of the event that the registration belongs to. */
  eventId: Scalars['ID'];
  /** The ID of the registration. */
  id: Scalars['ID'];
};

/** Input type to create deck. */
export type CreateDeckInput = {
  cardQuantities: Array<CardQuantityInput>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
};

/** CreateDeckPayload is the response type returned if Deck creation successeed. */
export type CreateDeckPayload = {
  __typename?: 'CreateDeckPayload';
  deck?: Maybe<Deck>;
};

/** The input type to be used when creating an event. */
export type CreateEventInput = {
  /**
   * The street address of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Must not include HTML; use line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** If this event has a Limited format (such as Draft or Sealed), the ID of the CardSet that will be in use. */
  cardSetId?: Maybe<Scalars['ID']>;
  /** A description of the event. Should not contain HTML. */
  description?: Maybe<Scalars['String']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The cost of the event, in minor currency units (e.g., cents). Defaults to 0. */
  entryFeeAmount?: Maybe<Scalars['Int']>;
  /** The currency of the entry fee. Defaults to USD. */
  entryFeeCurrency?: Maybe<Scalars['String']>;
  /** The time that the event is estimated to end, in ISO format. */
  estimatedEndTime?: Maybe<Scalars['String']>;
  /** The ID of the EventFormat for the event. Required. */
  eventFormatId: Scalars['ID'];
  /** The official event template id that this event is currently using */
  eventTemplateId?: Maybe<Scalars['ID']>;
  /** If this event will be created with a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /**
   * The latitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  latitude: Scalars['Float'];
  /**
   * The longitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  longitude: Scalars['Float'];
  /** The ID of the organization that owns this event. Required. */
  organizationId: Scalars['ID'];
  /** The pairing method for the event. Required. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The number of players per team in the event. */
  requiredTeamSize?: Maybe<Scalars['Int']>;
  /** The Rules Enforcement Level for the event. Required. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /** The time that the event is scheduled to start, in ISO format. */
  scheduledStartTime?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /** The time zone where the event is being held. Required. */
  timeZone: Scalars['String'];
  /** The title of the event. Required. */
  title: Scalars['String'];
  /**
   * The ID of the venue for the event. Must belong to the same organization as the event. If `null`,
   * the event is understood to be occurring at the store's location.
   */
  venueId?: Maybe<Scalars['ID']>;
};

export type CreateIncidentInput = {
  /** The reporter's comments about this incident. */
  comment?: Maybe<Scalars['String']>;
  /** The ID of the event during which the incident occurred. */
  eventId: Scalars['ID'];
  /** The ID of the infraction category that occurred. */
  infractionCategoryId: Scalars['ID'];
  /** The name of the infraction category that was assessed. */
  infractionCategoryName: Scalars['String'];
  /** The ID of the infraction that occurred. */
  infractionId: Scalars['ID'];
  /** The name of the infraction that was assessed. */
  infractionName: Scalars['String'];
  /** The persona ID of the offender. */
  offenderId: Scalars['ID'];
  /** The ID of the penalty that was assessed. */
  penaltyId: Scalars['ID'];
  /** The name of the penalty that was assessed. */
  penaltyName: Scalars['String'];
  /** The time at which the incident was reported. */
  reportedAt: Scalars['DateTime'];
  /** The persona ID of the reporter. */
  reporterId: Scalars['ID'];
  /** The round number during which the incident occurred. */
  roundNumber: Scalars['Int'];
};

/** The input type to be used when creating a Private event. */
export type CreatePrivateEventInput = {
  /** A description of the event. Should not contain HTML. Optional */
  description?: Maybe<Scalars['String']>;
  /** The ID of the EventFormat for the event. Required. */
  eventFormat: EventFormatEnum;
  /** The number of games until a win. Required */
  gamesToWin: Scalars['Int'];
  /** The pairing method for the event. Required. */
  pairingType: PairingType;
  /** The Date & time that the event is scheduled to start, in ISO format. Optional */
  scheduledStartDateTime?: Maybe<Scalars['String']>;
  /** The title of the event. Required. */
  title: Scalars['String'];
};

/** The input type to be used when creating multiple recurring events. */
export type CreateRecurringEventInput = {
  /**
   * The street address of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Must not include HTML; use line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** If this event has a Limited format (such as Draft or Sealed), the ID of the CardSet that will be in use. */
  cardSetId?: Maybe<Scalars['ID']>;
  /** A description of the event. Should not contain HTML. */
  description?: Maybe<Scalars['String']>;
  /** Day of the week mask, used only for creating recurring events when the frequency is WEEKLY */
  dotWMask?: Maybe<Scalars['Int']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The cost of the event, in minor currency units (e.g., cents). Defaults to 0. */
  entryFeeAmount?: Maybe<Scalars['Int']>;
  /** The currency of the entry fee. Defaults to USD. */
  entryFeeCurrency?: Maybe<Scalars['String']>;
  /** The time that the event is estimated to end, in ISO format. */
  estimatedEndTime?: Maybe<Scalars['String']>;
  /** The ID of the EventFormat for the event. Required. */
  eventFormatId: Scalars['ID'];
  /** The official event template id that this event is currently using */
  eventTemplateId?: Maybe<Scalars['ID']>;
  /** The frequency at which to create a group of recurring events */
  frequency: RecurrenceFrequency;
  /** If this event will be created with a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Is the recurrence Day of the Week bound, used only for creating recurring events when the frequency is MONTHLY */
  isDotWBound?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /**
   * The latitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  latitude?: Maybe<Scalars['Float']>;
  /**
   * The longitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  longitude?: Maybe<Scalars['Float']>;
  /** The ID of the organization that owns this event. Required. */
  organizationId: Scalars['ID'];
  /** The pairing method for the event. Required. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The date that the recurrence should stop trying to create events at, in ISO format. */
  repeatUntil: Scalars['String'];
  /** The number of players per team in the event. */
  requiredTeamSize?: Maybe<Scalars['Int']>;
  /** The Rules Enforcement Level for the event. Required. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /** The time that the event is scheduled to start, in ISO format. */
  scheduledStartTime?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /** The time zone where the event is being held. Required. */
  timeZone: Scalars['String'];
  /** The title of the event. Required. */
  title: Scalars['String'];
  /**
   * The ID of the venue for the event. Must belong to the same organization as the event. If `null`,
   * the event is understood to be occurring at the store's location.
   */
  venueId?: Maybe<Scalars['ID']>;
};

export type CreateTeamIncidentInput = {
  /** The reporter's comments about this incident. */
  comment?: Maybe<Scalars['String']>;
  /** The ID of the event during which the incident occurred. */
  eventId: Scalars['ID'];
  /** The ID of the infraction category that occurred. */
  infractionCategoryId: Scalars['ID'];
  /** The name of the infraction category that was assessed. */
  infractionCategoryName: Scalars['String'];
  /** The ID of the infraction that occurred. */
  infractionId: Scalars['ID'];
  /** The name of the infraction that was assessed. */
  infractionName: Scalars['String'];
  /** The persona ID of the offender. */
  offenderIds: Array<Scalars['ID']>;
  /** The ID of the penalty that was assessed. */
  penaltyId: Scalars['ID'];
  /** The name of the penalty that was assessed. */
  penaltyName: Scalars['String'];
  /** The time at which the incident was reported. */
  reportedAt: Scalars['DateTime'];
  /** The persona ID of the reporter. */
  reporterId: Scalars['ID'];
  /** The round number during which the incident occurred. */
  roundNumber: Scalars['Int'];
};

/** The input type for creating a Timer. */
export type CreateTimerInput = {
  /** The number of milliseconds to count down from. */
  durationMs: Scalars['Int'];
  /** The state the timer should start in. */
  state: TimerState;
};

/** The input type for creating a venue. */
export type CreateVenueInput = {
  /** The physical address of the venue. */
  address?: Maybe<Scalars['String']>;
  /** The maximum capacity of the venue. */
  capacity?: Maybe<Scalars['Int']>;
  /** City, part of the full physical address */
  city?: Maybe<Scalars['String']>;
  /** Country, part of the full physical address */
  country?: Maybe<Scalars['String']>;
  /** The email address of the venue. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The Google Place ID of the venue. */
  googlePlaceId?: Maybe<Scalars['String']>;
  /** The latitude of the venue's physical location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of the venue's physical location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the venue. Should be unique in the scope of an organization. Required. */
  name: Scalars['String'];
  /** Any additional notes about the venue. */
  notes?: Maybe<Scalars['String']>;
  /** The ID of the organization creating this venue. Required. */
  organizationId: Scalars['ID'];
  /** The phone number of the venue. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Postal Code, part of the full physical address */
  postalCode?: Maybe<Scalars['String']>;
  /** State/Territory, part of the full physical address */
  state?: Maybe<Scalars['String']>;
  /** The street address, part of the full physical address */
  streetAddress?: Maybe<Scalars['String']>;
  /** The time zone of the venue. Must be a valid IANA time zone identifier, e.g. 'America/Los_Angeles'. */
  timeZone?: Maybe<Scalars['String']>;
};

/** A deck is a collection of Magic cards, divided into the main deck and sideboard. */
export type Deck = {
  __typename?: 'Deck';
  /** List of Cards and Quantity,Default: page=1, size=10 */
  cardQuantityConnection: CardQuantityConnection;
  id: Scalars['ID'];
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
  owner: DeckOwner;
};


/** A deck is a collection of Magic cards, divided into the main deck and sideboard. */
export type DeckCardQuantityConnectionArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

/** A DeckConnection provides paginated result set of decks owned by current user. */
export type DeckConnection = {
  __typename?: 'DeckConnection';
  deckPageInfo: DeckPageInfo;
  node?: Maybe<Deck>;
};

/** To establish the Ownership of a Deck. */
export type DeckOwner = {
  __typename?: 'DeckOwner';
  accountId: Scalars['ID'];
};

/** Information about pagination in a connection. */
export type DeckPageInfo = {
  __typename?: 'DeckPageInfo';
  /** Current page number */
  currentPage?: Maybe<Scalars['Int']>;
  /** When paginating forwards, are there more items? */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Count of total items */
  totalItems?: Maybe<Scalars['Int']>;
  /** Count of total Pages */
  totalPages?: Maybe<Scalars['Int']>;
};

/** A section of a decklist, used for categorizing cards. */
export enum DeckSection {
  /** The main deck. */
  Main = 'MAIN',
  /** The sideboard. */
  Sideboard = 'SIDEBOARD'
}

/** The payload type for the deleteDeck mutation. */
export type DeleteDeckPayload = {
  __typename?: 'DeleteDeckPayload';
  /** Whether the deletion was successful. */
  success?: Maybe<Scalars['Boolean']>;
};

export type DeleteIncidentInput = {
  /** The ID of the event during which the incident occurred. */
  eventId: Scalars['ID'];
  /** The ID of the incident to update. */
  id: Scalars['ID'];
};

/** The input type to be used when deleting a series of recurring events. */
export type DeleteRecurringEventInput = {
  /** The date after which to delete events from the series. */
  deleteAfter?: Maybe<Scalars['DateTime']>;
  /** The ID of the group to delete recurring events from. Required. */
  groupId: Scalars['ID'];
  /** The ID of the organization that owns this event. Required. */
  organizationId: Scalars['ID'];
};

export type Drop = {
  __typename?: 'Drop';
  /**
   * The last round number that the team participated in. Will be 0 if the team dropped
   * before pairing for the first round.
   */
  roundNumber: Scalars['Int'];
  /** The ID of the team that dropped. */
  teamId: Scalars['ID'];
};

/** An event is an occurrence of Organized Play. Example: Mox Boarding House FNM 10/4/2019. */
export type Event = {
  __typename?: 'Event';
  /**
   * The time at which an authorized user ended the event. Not necessarily the same
   * time that its last round ended. `null` unless the event has been ended.
   */
  actualEndTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time at which an authorized user started the event. Not necessarily the same
   * time that its first round began. `null` unless the event has been started.
   */
  actualStartTime?: Maybe<Scalars['DateTime']>;
  /**
   * The street address of the event's location. Does not include HTML; uses line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** If this event has a Limited format (such as Draft or Sealed), the set that will be in use. */
  cardSet?: Maybe<CardSet>;
  /** The persona id of the user that created this event. */
  createdBy?: Maybe<Scalars['ID']>;
  /** The description of the event. */
  description?: Maybe<Scalars['String']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The entry fee for this event, if any. Defaults to zero US dollars. */
  entryFee: Money;
  /** An estimate of when the event will conclude. */
  estimatedEndTime?: Maybe<Scalars['DateTime']>;
  /** The format of the event. */
  eventFormat?: Maybe<EventFormat>;
  /** The official event template id that this event is currently using */
  eventTemplate?: Maybe<EventTemplate>;
  /** DEPRECATED. The format of the event. Please use eventFormat instead. */
  format?: Maybe<EventFormatEnum>;
  /**
   * The game state of an event tracks all of the things related to running the
   * event: pods, pairings, rounds, matches, match results, and standings. May
   * be `null` if the event is still in `SCHEDULED` status.
   */
  gameState?: Maybe<GameState>;
  /** If an event was created as part of a group this will have a value. Otherwise it will be null. */
  groupId?: Maybe<Scalars['ID']>;
  /** If this event will have a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** The incidents that have been reported during this event. */
  incidents?: Maybe<Array<Incident>>;
  /**
   * The list of people who have indicated their interest in this event but who
   * have not yet paid or been registered. Event-Res calls this "reservations."
   */
  interestedPlayers?: Maybe<Array<Registration>>;
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /** The latitude of the event's location. */
  latitude?: Maybe<Scalars['Float']>;
  /**
   * DEPRECATED. If this event has a Limited format (such as Draft or Sealed), the set that
   * will be in use. Please use cardSet instead.
   */
  limitedSet?: Maybe<LimitedSet>;
  /** The longitude of the event's location. */
  longitude?: Maybe<Scalars['Float']>;
  /**
   * The number of players currently registered for this event. This is a simple count
   * of registrations; does not subtract drops.
   */
  numberOfPlayers?: Maybe<Scalars['Int']>;
  /** The organization that is running the event. */
  organization: Organization;
  /** The pairing method for the event. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The incidents that have been reported during this event for a player. */
  playerIncidents?: Maybe<Array<Incident>>;
  /**
   * The list of people who have paid and been assigned a spot in the event.
   * Event-Res calls this "registrations."
   */
  registeredPlayers?: Maybe<Array<Registration>>;
  /** The number of players per team in the event. */
  requiredTeamSize: Scalars['Int'];
  /** The Rules Enforcement Level for the event. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /**
   * The time that the event is scheduled to begin, for use in calendaring tools. This
   * is not necessarily the time that the event will actually begin.
   */
  scheduledStartTime?: Maybe<Scalars['DateTime']>;
  /**
   * A short (generally 6-character) string that uniquely identifies this event. Used
   * by the player experience for easy event signup.
   */
  shortCode?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /**
   * Events are in the SCHEDULED status upon creation and until they are explicitly
   * started by an authorized user. When they are started, they will transition to
   * DRAFTING. When the first round is started, the event will move to ROUNDACTIVE
   * and then ROUNDCERTIFIED once all scores for the round are recorded. It moves
   * back and forth between ROUNDACTIVE and ROUNDCERTIFIED until the last round
   * has been certified. When an authorized user ends the event, it will move to
   * ENDED. An event will be CANCELLED only if it is deleted without ever having
   * been started.
   */
  status: EventStatus;
  /** The tags used by Store and Event Locator for this event. */
  tags: Array<Scalars['String']>;
  /** Get all the current teams for an event */
  teams: Array<TeamPayload>;
  /** The time zone where the event is being held. */
  timeZone: Scalars['String'];
  /** The title of the event. */
  title: Scalars['String'];
  /**
   * The venue hosting the event. If this field is `null`, then the event is happening
   * at the organization's location.
   */
  venue?: Maybe<Venue>;
};


/** An event is an occurrence of Organized Play. Example: Mox Boarding House FNM 10/4/2019. */
export type EventPlayerIncidentsArgs = {
  personaId?: Maybe<Scalars['String']>;
};

/** A type for specifying search criteria for events. */
export type EventFilter = {
  /** The latest datetime for returned events. */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Limit search results to events with a specific format. */
  format?: Maybe<EventFormatEnum>;
  /** The page of results to return, 0-based. If not provided, the first page will be returned. */
  page?: Maybe<Scalars['Int']>;
  /** The maximum number of results to return. If not provided, at most 30 results will be returned. */
  pageSize?: Maybe<Scalars['Int']>;
  /** A string to filter events by. Will perform a 'contains' search on the title and description fields. */
  searchText?: Maybe<Scalars['String']>;
  /** The earliest datetime for returned events. */
  startDate?: Maybe<Scalars['DateTime']>;
  /** Limit search results to events occurring at a specific venue. */
  venueId?: Maybe<Scalars['ID']>;
};

/** Ways to play Magic: The Gathering */
export type EventFormat = {
  __typename?: 'EventFormat';
  /** A short description of this format */
  blurb?: Maybe<Scalars['String']>;
  /** A CSS color specifier for the color to use to visually distinguish the format */
  color?: Maybe<Scalars['String']>;
  /** The type-specific, unique-identifier of this event format */
  id: Scalars['ID'];
  /** Whether events in this format include a Deck Construction phase */
  includesDeckbuilding: Scalars['Boolean'];
  /** Whether events in this format include a Drafting phase */
  includesDraft: Scalars['Boolean'];
  /** The name of the format */
  name: Scalars['String'];
  /** Whether tournament organizers are required to select a card set when scheduling events in this format */
  requiresSetSelection: Scalars['Boolean'];
  /** Whether this format is exclusively available to internal Wizards of the Coast events */
  wizardsOnly: Scalars['Boolean'];
};

/**
 * The main formats are supported along with OTHER for any format that doesn't fit and
 * WOTC_DRAFT, a special draft format for WOTC Draft Night.
 * The description of each enum value gives you the i18n key of the format name.
 */
export enum EventFormatEnum {
  /** format__booster-draft */
  BoosterDraft = 'BOOSTER_DRAFT',
  /** format__brawl */
  Brawl = 'BRAWL',
  /** format__commander */
  Commander = 'COMMANDER',
  /** format__four-pack-sealed */
  FourPackSealed = 'FOUR_PACK_SEALED',
  /** format__historic */
  Historic = 'HISTORIC',
  /** format__legacy */
  Legacy = 'LEGACY',
  /** format__modern */
  Modern = 'MODERN',
  /** format__other */
  Other = 'OTHER',
  /** format__pauper */
  Pauper = 'PAUPER',
  /** format__pioneer */
  Pioneer = 'PIONEER',
  /** format__sealed-deck */
  SealedDeck = 'SEALED_DECK',
  /** format__standard */
  Standard = 'STANDARD',
  /** format__vintage */
  Vintage = 'VINTAGE',
  /** format__wotc-draft */
  WotcDraft = 'WOTC_DRAFT'
}

/** A type for returning a page of event search results. */
export type EventPage = {
  __typename?: 'EventPage';
  events: Array<Event>;
  hasMoreResults?: Maybe<Scalars['Boolean']>;
  pageInfo: PageInfo;
};

export type EventStartedPayload = {
  __typename?: 'EventStartedPayload';
  /** The user who created the event */
  eventCreator?: Maybe<User>;
  /** The id of the event that was created */
  eventId: Scalars['ID'];
  /** The format that this event was started with. */
  format?: Maybe<EventFormat>;
  /** The number of games until a win. */
  gamesToWin?: Maybe<Scalars['Int']>;
  /** Is this event a private one */
  isPrivateEvent?: Maybe<Scalars['Boolean']>;
  /** The minimum number of rounds required to reach a winner. */
  minRounds?: Maybe<Scalars['Int']>;
  /** The organization id that this event was created under */
  organizationId?: Maybe<Scalars['ID']>;
  /** The pairing method for the event. */
  pairingType?: Maybe<PairingType>;
  /** The round that this event was started with. */
  roundNumber?: Maybe<Scalars['Int']>;
  /** The user who started the event */
  sender?: Maybe<User>;
};

export enum EventStatus {
  /** The event was cancelled before play completed. */
  Cancelled = 'CANCELLED',
  /** Drafting is complete and players are expected to construct their limited deck. */
  Deckconstruction = 'DECKCONSTRUCTION',
  /** Player registration is complete and the players have been assigned to draft pods. */
  Drafting = 'DRAFTING',
  /** The event has ended normally. */
  Ended = 'ENDED',
  /** The event did not start within 7 days of its scheduled start time and has been expired. */
  Expired = 'EXPIRED',
  /** At least one player has been registered but the event has not yet been paired */
  Playerregistration = 'PLAYERREGISTRATION',
  /**
   * A round of the event is currently being played. (You can check the currentRound of
   * the Event object to find out which round it is.)
   */
  Roundactive = 'ROUNDACTIVE',
  /**
   * All scores for the most recently played round have been recorded and certified, but the
   * next round (if any) has not yet begun. Pairings for the next round, if any, are available.
   */
  Roundcertified = 'ROUNDCERTIFIED',
  /**
   * Player registration is complete and the first round is ready, with pairings.
   * Note that this status is not used in a Draft tournament, which has its own
   * pre-round states.
   */
  Roundready = 'ROUNDREADY',
  /**
   * (Deprecated) the event is currently active. Replaced by DRAFTING, DECK_CONSTRUCTION,
   * ROUND_READY, ROUND_ACTIVE, and ROUND_CERTIFIED.
   */
  Running = 'RUNNING',
  /** The default, initial state of a newly-created event: scheduled but not yet active */
  Scheduled = 'SCHEDULED'
}

export type EventTemplate = {
  __typename?: 'EventTemplate';
  /** When does this template end and is no longer shown within EventLink */
  endDate?: Maybe<Scalars['DateTime']>;
  /** Is this template supposed to be shown above the other templates */
  featured?: Maybe<Scalars['Boolean']>;
  fieldRules: Array<FieldRuleOption>;
  /** When this template was first published in Contentful */
  firstPublishedAt: Scalars['DateTime'];
  groupsAvailable: Array<OrganizationGroupOption>;
  /** Does this tempalte come with promotional product? */
  hasPromoProduct?: Maybe<Scalars['Boolean']>;
  /** The unique id of this template */
  id: Scalars['ID'];
  /** Does this template ever end? */
  isEvergreen?: Maybe<Scalars['Boolean']>;
  /** The url to the image to be used for templates when browsing */
  keyArt?: Maybe<Scalars['String']>;
  /** The name given to this template */
  name: Scalars['String'];
  /** The type of prerelease template. Only used if templateType is a prerelease. This is used to distinguish betwen 'At Home', 'In Store', and 'Webcam' prereleases. */
  prereleaseType?: Maybe<Scalars['String']>;
  /** When does this template start and is able to be viewed within EventLink */
  startDate?: Maybe<Scalars['DateTime']>;
  /** The tags for this template that will be applied to the event this event template is on */
  tags: Tags;
  /** How many of this template can be created per organization */
  templateQuota?: Maybe<Scalars['Int']>;
  /** The type of template this is. Used currently to distinguish between regular templates and prerelease templates. */
  templateType?: Maybe<Scalars['String']>;
  /** The url to the relavant WPN article for this template */
  wpnArticle?: Maybe<Scalars['String']>;
};

export type Feedback = {
  __typename?: 'Feedback';
  /** Content of the feedback message. */
  feedback: Scalars['String'];
  /** The organization tied to the feedback. */
  orgId: Scalars['ID'];
  /** The reccomendation rating tied to the feedback. */
  recommendationLevel?: Maybe<Scalars['Int']>;
  /** The person who gave the feedback. */
  reporterId: Scalars['ID'];
};

export type FeedbackInput = {
  /** Content of the feedback message. */
  feedback: Scalars['String'];
  /** The organization tied to the feedback. */
  orgId: Scalars['ID'];
  /** The reccomendation rating tied to the feedback. */
  recommendationLevel?: Maybe<Scalars['Int']>;
  /** The person who gave the feedback. */
  reporterId: Scalars['ID'];
};

export type FieldRuleOption = {
  __typename?: 'FieldRuleOption';
  fieldName: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  rule: Rule;
};

export type GameState = {
  __typename?: 'GameState';
  /** GUID or UUID of that represents Timer ID of Timer GraphQL for Deck Construction */
  constructDraftTimerID?: Maybe<Scalars['ID']>;
  /** The table seat assignments for players in a sealed constructed event. */
  constructedSeats?: Maybe<Array<Seat>>;
  /**
   * If present, the time at which the deck construction was ended, that is, the time that the first
   * round was created. May be `null` if the event is not sealed or the first round
   * has not yet been created.
   */
  constructionTimeEndTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time at which the deck construction timer reaches 0. Only applicable for sealed formats (e.g.,
   * `SEALED_DECK`). May be `null` if the event is not sealed or the timer has not
   * been started.
   */
  constructionTimerExpirationTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time that the deck construction timer was started. Only applicable for sealed formats (e.g.,
   * `SEALED_DECK`). May be `null` if the event is not sealed or the timer has not
   * been started.
   */
  constructionTimerStartTime?: Maybe<Scalars['DateTime']>;
  /** The current round of the event. May be `null` if no rounds have been created. */
  currentRound?: Maybe<Round>;
  /** The number of the current round. Will be 0 before the first round starts. */
  currentRoundNumber: Scalars['Int'];
  /**
   * If present, the time at which the draft was ended, that is, the time that the first
   * round was created. May be `null` if the event is not drafting or the first round
   * has not yet been created.
   */
  draftEndTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time at which the draft timer reaches 0. Only applicable for draft formats (e.g.,
   * `WOTC_DRAFT`). May be `null` if the event is not drafting or the timer has not
   * been started.
   */
  draftTimerExpirationTime?: Maybe<Scalars['DateTime']>;
  /** GUID or UUID of that represents Timer ID of Timer GraphQL for Drafting */
  draftTimerID?: Maybe<Scalars['ID']>;
  /**
   * The time that the draft timer was started. Only applicable for draft formats (e.g.,
   * `WOTC_DRAFT`). May be `null` if the event is not drafting or the timer has not
   * been started.
   */
  draftTimerStartTime?: Maybe<Scalars['DateTime']>;
  /** A list of the teams who have dropped out of the event. */
  drops: Array<Drop>;
  /** The number of games until a win. */
  gamesToWin?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** The minimum number of rounds required to reach a winner. */
  minRounds?: Maybe<Scalars['Int']>;
  /** Information about upcoming rounds/phases of the event. */
  nextRoundMeta?: Maybe<RoundMetadata>;
  /** The pairing type that will determine the way to handle pairings with regards to pods */
  podPairingType?: Maybe<PodPairingType>;
  /**
   * The list of draft pod assignments for the event. Only applicable for a draft formats
   * (e.g., `WOTC_DRAFT`).
   */
  pods?: Maybe<Array<Pod>>;
  /** The list of rounds for this event. May be empty if no rounds have been created. */
  rounds: Array<Round>;
  /**
   * The standings for this event, based on completed and certified rounds; will
   * not include match results from the current round.
   */
  standings: Array<TeamStanding>;
  /**
   * (e.g., `WOTC_DRAFT`) that have a cut to top 8. May be `null` if the event is
   * not drafting, there is no top 8 cut, or the timer has not been started.
   *
   * If present, the time at which the top 8 draft was ended, that is, the time that the
   * quarterfinal round was created. May be `null` if the event is not drafting, there
   * is no top 8 cut, or the timer has not been started.
   */
  top8DraftEndTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time that the top 8 draft timer was started. Only applicable for draft formats
   * (e.g., `WOTC_DRAFT`) that have a cut to top 8. May be `null` if the event is
   * not drafting, there is no top 8 cut, or the timer has not been started.
   */
  top8DraftTimerExpirationTime?: Maybe<Scalars['DateTime']>;
  /** GUID or UUID of that represents Timer ID of Timer GraphQL for Top8 Drafting */
  top8DraftTimerID?: Maybe<Scalars['ID']>;
  /**
   * The time that the top 8 draft timer was started. Only applicable for draft formats
   * (e.g., `WOTC_DRAFT`) that have a cut to top 8. May be `null` if the event is
   * not drafting, there is no top 8 cut, or the timer has not been started.
   */
  top8DraftTimerStartTime?: Maybe<Scalars['DateTime']>;
  /**
   * The list of draft pod assignments for the event after the cut to top 8. Fairly
   * redundant, since this will always match the top 8 ranked players (there is only
   * one pod). Only applicable for a draft formats (e.g., `WOTC_DRAFT`).
   */
  top8Pods?: Maybe<Array<Pod>>;
};

export type GamekeeperNotificationPayload = {
  __typename?: 'GamekeeperNotificationPayload';
  activePlayers: Array<Maybe<User>>;
  /** The user who created the event */
  eventCreator?: Maybe<User>;
  /** The id of the event that was created */
  eventId: Scalars['ID'];
  /** Is this event a private one */
  isPrivateEvent?: Maybe<Scalars['Boolean']>;
  /** The id of the organization for the event */
  organizationId: Scalars['ID'];
  /** The user who updated the game result */
  sender?: Maybe<User>;
};

export type GroupInput = {
  /** The group that we will be adding or removing */
  group: Scalars['String'];
  /** The ID of the organization doing the adding or removing of groups */
  id: Scalars['ID'];
};

export type Incident = {
  __typename?: 'Incident';
  /** Comment about this incident. */
  comment?: Maybe<Scalars['String']>;
  /** The event during which the incident occurred. */
  event: Event;
  /** The ID of the incident. */
  id: Scalars['ID'];
  /** The infraction that occurred. */
  infraction: Infraction;
  /** The person who is the subject of the incident. */
  offender: Registration;
  /** The penalty that was assessed. */
  penalty: Penalty;
  /** The time at which the incident was reported. */
  reportedAt: Scalars['DateTime'];
  /** The person who reported the incident. */
  reporter: User;
  /** The round number during which the incident occurred. */
  roundNumber: Scalars['Int'];
  /**
   * The ticket ID of this incident in Zendesk. Will be `null` if the incident
   * has not yet been stored in Zendesk.
   */
  ticketId?: Maybe<Scalars['ID']>;
};

/** An infraction */
export type Infraction = {
  __typename?: 'Infraction';
  /** The category of the infraction */
  category: InfractionCategory;
  /**
   * The default penalty to apply to incidents of this infraction.
   * This should be overridable by the judge entering the incident.
   */
  defaultPenalty?: Maybe<Penalty>;
  /** The type-specific, unique-identifier of this infraction */
  id: Scalars['ID'];
  /** The name of the infraction */
  name: Scalars['String'];
};

/** An infraction categoy */
export type InfractionCategory = {
  __typename?: 'InfractionCategory';
  /** The type-specific, unique-identifier of this infraction category */
  id: Scalars['ID'];
  /** The infractions belonging to this category */
  infractions: Array<Infraction>;
  /** The name of the category */
  name: Scalars['String'];
  /** The order this infraction category should be displayed when in a list */
  order: Scalars['Int'];
};

/**
 * For Limited events, the specific release set that will be used.
 * The description of each enum value gives you the i18n key of the format name.
 */
export enum LimitedSet {
  /** set__battlebond */
  Battlebond = 'BATTLEBOND',
  /** set__commander2018 */
  Commander_2018 = 'COMMANDER_2018',
  /** set__commander2019 */
  Commander_2019 = 'COMMANDER_2019',
  /** set__core-set2019 */
  CoreSet_2019 = 'CORE_SET_2019',
  /** set__core-set2020 */
  CoreSet_2020 = 'CORE_SET_2020',
  /** set__dominaria */
  Dominaria = 'DOMINARIA',
  /** set__guilds-of-ravnica */
  GuildsOfRavnica = 'GUILDS_OF_RAVNICA',
  /** set__masters25 */
  Masters_25 = 'MASTERS_25',
  /** set__modern-horizons */
  ModernHorizons = 'MODERN_HORIZONS',
  /** set__other */
  Other = 'OTHER',
  /** set__ravnica-allegiance */
  RavnicaAllegiance = 'RAVNICA_ALLEGIANCE',
  /** set__theros-beyond-death */
  TherosBeyondDeath = 'THEROS_BEYOND_DEATH',
  /** set__throne-of-eldraine */
  ThroneOfEldraine = 'THRONE_OF_ELDRAINE',
  /** set__ultimate-masters */
  UltimateMasters = 'ULTIMATE_MASTERS',
  /** set__war-of-the-spark */
  WarOfTheSpark = 'WAR_OF_THE_SPARK'
}

/** An input type for specifying the logical operator and terms to evaluate the legalities of a card */
export type LogicalLegalitiesInput = {
  formatName?: Maybe<Scalars['String']>;
  legalStatus?: Maybe<Scalars['String']>;
  operator?: Maybe<LogicalOperator>;
};

/** An input type for specifying the logical operator and terms to evaluate the Mana Cost of a card */
export type LogicalManaCostInput = {
  color?: Maybe<Scalars['String']>;
  operator?: Maybe<LogicalOperator>;
  quantity?: Maybe<Scalars['Int']>;
};

export enum LogicalOperator {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR'
}

/** An input type for specifying the logical operator and terms to evaluate cards by */
export type LogicalOperatorFilter = {
  operator?: Maybe<LogicalOperator>;
  terms?: Maybe<Scalars['String']>;
};

/** An input type for specifying the logical operator and terms to evaluate the rarity of a card */
export type LogicalRarityInput = {
  operator?: Maybe<LogicalOperator>;
  rarity?: Maybe<MagicCardRarity>;
};

/**
 * A Magic: The Gathering card. It's the object that includes all of the latest
 * rulings and legalities, as well as the official card rules text
 */
export type MagicCard = {
  __typename?: 'MagicCard';
  /** Related parts for MagicCards such as faces and tokens */
  cardRelations?: Maybe<Array<Maybe<MagicCardRelation>>>;
  /** A card is the color or colors of the mana symbols in its mana cost, regardless of the color of its frame */
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The converted mana cost of the card */
  convertedManaCost?: Maybe<Array<Maybe<Scalars['Float']>>>;
  /**
   * All Magic cards have at least one face, and most have exactly one. Multi-faced
   * cards do exist, however: some are double-sided, and some even have more than
   * two sides. This field will be null unless isMultiFace is true
   */
  faces?: Maybe<Array<MagicCardFace>>;
  /** A unique ID for the card */
  id: Scalars['ID'];
  /** Whether this card has more than one face. This is true for double-sided cards */
  isMultiFace?: Maybe<Scalars['Boolean']>;
  /** The most recent physical printing of this card */
  latestPrinting?: Maybe<MagicCardPrinting>;
  /** An array of objects listing whether the card is banned, restricted, suspended, or legal in each MagicFormat */
  legalities: Array<MagicCardLegality>;
  /** The loyalty of the card, if any. */
  loyalty?: Maybe<Scalars['Int']>;
  /** The mana cost of the card */
  manaCost?: Maybe<Scalars['MagicManaCost']>;
  /** The name of the card. With very few exceptions, card names are unique */
  name: Scalars['String'];
  /** The latest official rules text of the card, if any */
  oracleText?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The power of the card, if any. Usually a number, but may be a different symbol */
  power?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A specific printing of a card returned if setAbbreviation and language filters are passed in */
  printing?: Maybe<MagicCardPrinting>;
  /**
   * A list of the physical card printings of this card. If you only need the most
   * recent printing of the card, use the latestPrinting field itself, as
   * retrieving that data is more performant
   */
  printings?: Maybe<Array<MagicCardPrinting>>;
  /** The relationType of a card if it is Multi Faced. */
  relationType?: Maybe<Scalars['String']>;
  /** Any rulings that have been made concerning this card */
  rulings?: Maybe<Array<Maybe<MagicRuling>>>;
  /** A list of the subtypes that the card bears */
  subtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A list of the supertypes that the card bears */
  supertypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The toughness of the card, if any. Usually a number, but may be a different symbol */
  toughness?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A list of the types that the card bears */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** A MagicCardFace object contains fields that can vary for each face of a multi-faced card */
export type MagicCardFace = {
  __typename?: 'MagicCardFace';
  artistCredit?: Maybe<Scalars['String']>;
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  convertedManaCost?: Maybe<Scalars['Int']>;
  flavorText?: Maybe<Scalars['String']>;
  fullImageUrl?: Maybe<Scalars['String']>;
  localizedOracleText?: Maybe<Scalars['String']>;
  loyalty?: Maybe<Scalars['Int']>;
  manaCost?: Maybe<Scalars['MagicManaCost']>;
  name: Scalars['String'];
  oracleText?: Maybe<Scalars['String']>;
  power?: Maybe<Scalars['String']>;
  subtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  supertypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  thumbnailImageUrl?: Maybe<Scalars['String']>;
  toughness?: Maybe<Scalars['String']>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/**
 * Provides filters and operators to search against the database of MagicCards This
 * is the required argument type for the magicCards query field
 */
export type MagicCardFilterInput = {
  artists?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardSubType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardSuperType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  collectorNumber?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  color?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  convertedManaCost?: Maybe<RangeFilterInput>;
  flavorText?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  formats?: Maybe<Array<Maybe<LogicalLegalitiesInput>>>;
  language?: Maybe<PrintedLanguage>;
  manaCost?: Maybe<Array<Maybe<LogicalManaCostInput>>>;
  mark?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  name?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  power?: Maybe<RangeFilterInput>;
  rarity?: Maybe<Array<Maybe<LogicalRarityInput>>>;
  rulesText?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  setAbbreviation?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  setName?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  toughness?: Maybe<RangeFilterInput>;
};

/** Magic cards legality status */
export enum MagicCardLegalStatus {
  Banned = 'BANNED',
  Legal = 'LEGAL',
  Notlegal = 'NOTLEGAL',
  Restricted = 'RESTRICTED',
  Suspended = 'SUSPENDED'
}

/** An object that tracks a particular card's legal status in a particular format */
export type MagicCardLegality = {
  __typename?: 'MagicCardLegality';
  /** The ID of the card */
  cardId?: Maybe<Scalars['ID']>;
  /** Different format types in which a magic game can be played */
  format?: Maybe<MagicFormat>;
  /** The legal status of the card in the format */
  legalStatus?: Maybe<MagicCardLegalStatus>;
};

/** This type contains information about a card that is specific to a printing of that card */
export type MagicCardPrinting = {
  __typename?: 'MagicCardPrinting';
  /** The artist credit line, if any */
  artistCredit?: Maybe<Scalars['String']>;
  /** The collector number of the card in this printing. Usually but not always a number */
  collectorNumber?: Maybe<Scalars['String']>;
  /** A card is the color or colors of the mana symbols in its mana cost, regardless of the color of its frame */
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The converted mana cost of the card */
  convertedManaCost?: Maybe<Scalars['Float']>;
  /** A URL of a high-resolution image that represents the card printing */
  fullImageUrl?: Maybe<Scalars['String']>;
  /** A unique ID for the card printing */
  id: Scalars['ID'];
  /** Languages that a card was printed in */
  languageCode?: Maybe<Scalars['String']>;
  /** An array of objects listing whether the card is banned, restricted, suspended, or legal in each MagicFormat */
  legalities?: Maybe<Array<Maybe<MagicCardLegality>>>;
  /** The mana cost of the card */
  manaCost?: Maybe<Scalars['MagicManaCost']>;
  /** The name of the card. With very few exceptions, card names are unique */
  name: Scalars['String'];
  /** The power of the card, if any. Usually a number, but may be a different symbol */
  power?: Maybe<Scalars['String']>;
  /** The flavor text as it appears on the card */
  printedFlavorText?: Maybe<Scalars['String']>;
  /** The text as it appears on the card. May differ from the card's normative Oracle text */
  printedText?: Maybe<Scalars['String']>;
  /** The rarity of the card */
  rarity?: Maybe<Scalars['String']>;
  /** The set in which the card was printed */
  set: MagicCardSet;
  /** A list of the subtypes that the card bears */
  subtypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A list of the supertypes that the card bears */
  supertypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** A URL of a low-resolution image that represents the card printing */
  thumbnailImageUrl?: Maybe<Scalars['String']>;
  /** The toughness of the card, if any. Usually a number, but may be a different symbol */
  toughness?: Maybe<Scalars['String']>;
  /** A list of the types that the card bears */
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Watermarks on a card printing */
  watermark?: Maybe<Scalars['String']>;
};

/**
 * Provides filters and operators to search against the database of MagicCards.This
 * is the required argument type for the magicCards query field
 */
export type MagicCardPrintingFilterInput = {
  artists?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardSubType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardSuperType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  cardType?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  collectorNumber?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  color?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  convertedManaCost?: Maybe<RangeFilterInput>;
  flavorText?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  formats?: Maybe<Array<Maybe<LogicalLegalitiesInput>>>;
  language?: Maybe<PrintedLanguage>;
  manaCost?: Maybe<Array<Maybe<LogicalManaCostInput>>>;
  mark?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  name?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  power?: Maybe<RangeFilterInput>;
  rarity?: Maybe<Array<Maybe<LogicalRarityInput>>>;
  rulesText?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  setAbbreviation?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  setName?: Maybe<Array<Maybe<LogicalOperatorFilter>>>;
  toughness?: Maybe<RangeFilterInput>;
};

export type MagicCardPrintingSearchResult = SearchResult & {
  __typename?: 'MagicCardPrintingSearchResult';
  /**
   * The number of results returned for this page of the search; will always be
   * equal to or less than the limit specified on the query
   */
  currentPage: Scalars['Int'];
  /** Whether there exist search results beyond the end of this page */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Whether there exist search results before this page */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The MagicCardPrinting objects that were found, after applying limit and offset pagination parameters */
  magicCardPrintings: Array<MagicCardPrinting>;
  /**
   * The total number of results for this search that exist in the data store.
   * Includes all results, not just those returned on this page
   */
  totalPages: Scalars['Int'];
  /** The total number of results for this search */
  totalResults: Scalars['Int'];
};

/** Magic cards rarity */
export enum MagicCardRarity {
  Common = 'COMMON',
  MythicRare = 'MYTHIC_RARE',
  Rare = 'RARE',
  Uncommon = 'UNCOMMON'
}

export type MagicCardSearchResult = SearchResult & {
  __typename?: 'MagicCardSearchResult';
  /**
   * The number of results returned for this page of the search; will always be
   * equal to or less than the limit specified on the query
   */
  currentPage: Scalars['Int'];
  /** Whether there exist search results beyond the end of this page */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Whether there exist search results before this page */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /** The MagicCard objects that were found, after applying limit and offset pagination parameters */
  magicCards: Array<MagicCard>;
  /**
   * The total number of results for this search that exist in the data store.
   * Includes all results, not just those returned on this page
   */
  totalPages: Scalars['Int'];
  /** The total number of results for this search */
  totalResults: Scalars['Int'];
};

/** A Magic Card Set represents a collection set of magic cards */
export type MagicCardSet = {
  __typename?: 'MagicCardSet';
  /** The abbreviation of the set name */
  abbreviation?: Maybe<Scalars['String']>;
  /** The type-specific unique identifier of this card set */
  id?: Maybe<Scalars['ID']>;
  /** The name of the set */
  name: Scalars['String'];
  /** When the set was released */
  releaseDate: Scalars['DateTime'];
};

/** Magic card attribtes on which sorting can be performed */
export enum MagicCardSortCriteria {
  /** sort based on first name of artist in order */
  Artists = 'ARTISTS',
  /** sort based on release date chronological order */
  Chronological = 'CHRONOLOGICAL',
  /** sort based on collectorNumber */
  Collectornumber = 'COLLECTORNUMBER',
  /** sort based on Color */
  Color = 'COLOR',
  /** sort based on converted manna cost */
  Convertedmanacost = 'CONVERTEDMANACOST',
  /** sort based on first word of card title */
  Name = 'NAME',
  /** sort based on Power */
  Power = 'POWER',
  /** sort based on Rarity */
  Rarity = 'RARITY',
  /** sort based on toughness */
  Toughness = 'TOUGHNESS'
}

export type MagicCardSortInput = {
  Order?: Maybe<SortOrder>;
  SortBy?: Maybe<MagicCardSortCriteria>;
};

/** Different format types in which a magic game can be played */
export type MagicFormat = {
  __typename?: 'MagicFormat';
  blurb?: Maybe<Scalars['String']>;
  /** The type-specific unique identifier of this Format */
  id: Scalars['ID'];
  /** The name of the Format */
  name: Scalars['String'];
};

/** A ruling is a clarification or addendum to the Magic rules that is specific to a particular Magic card */
export type MagicRuling = {
  __typename?: 'MagicRuling';
  /** The ID of the ruling */
  id?: Maybe<Scalars['ID']>;
  /** The ID of the card this ruling applies to */
  magicCardId?: Maybe<Scalars['ID']>;
  /** The date on which the ruling was published */
  publicationDate?: Maybe<Scalars['DateTime']>;
  /** The text of the ruling */
  text?: Maybe<Scalars['String']>;
};

export type Match = {
  __typename?: 'Match';
  /** The unique key for the match to be used in the client side cache. */
  cacheId?: Maybe<Scalars['ID']>;
  /** The ID of the match. */
  id: Scalars['ID'];
  /** Is this match a bye? */
  isBye?: Maybe<Scalars['Boolean']>;
  /** Is the left team being dropped this round? */
  isLeftTeamDropped?: Maybe<Scalars['Boolean']>;
  /** Is the right team being dropped this round? */
  isRightTeamDropped?: Maybe<Scalars['Boolean']>;
  /**
   * The number of game wins the left (first) team has achieved in this match. Will be 0 if the
   * left team is being dropped. `null` if no game results have yet been recorded for this match.
   */
  leftTeamWins?: Maybe<Scalars['Int']>;
  /**
   * The number of game wins the right (second) team has achieved in this match. Will be 0 if this
   * is a bye, or if the right team is being dropped. `null` if no game results have yet been
   * recorded for this match.
   */
  rightTeamWins?: Maybe<Scalars['Int']>;
  /** The table number at which the match will be played. */
  tableNumber?: Maybe<Scalars['Int']>;
  /**
   * The teams participating in this match. By convention the first time in this array is
   * the 'left' team, and the second is the 'right' team. This will need to change when
   * we support multi-team games such as Commander.
   */
  teams: Array<Team>;
};

export type MatchResultInput = {
  /** draw holds game-level draws in matches between 0-9 */
  draws?: Maybe<Scalars['Int']>;
  /** The ID of the event. */
  eventId: Scalars['ID'];
  /** Was this match a bye? If so, the left (first) team is considered to have won 2-0. */
  isBye?: Maybe<Scalars['Boolean']>;
  /** The ID of the left team. */
  leftTeamId: Scalars['ID'];
  /** The number of wins that the left (first) team achieved. Ignored if `isBye` is true. */
  leftTeamWins?: Maybe<Scalars['Int']>;
  /** The ID of the match. */
  matchId: Scalars['ID'];
  /** The ID of the right team, if this is not a bye. */
  rightTeamId?: Maybe<Scalars['ID']>;
  /** The number of wins that the right (second) team achieved. Ignored if `isBye` is true. */
  rightTeamWins?: Maybe<Scalars['Int']>;
};

export type MobileNumberInput = {
  code: Scalars['String'];
  message: Scalars['String'];
  mobileNumber: Scalars['String'];
};

/**
 * In order to accurately track and display prices to users around the world, we
 * store currency amounts in integer minor units (e.g, cents) alongside an ISO 4217
 * currency code.
 */
export type Money = {
  __typename?: 'Money';
  /** Amounts are specified in minor currency units (e.g.: cents). */
  amount: Scalars['Int'];
  /** The ISO 4217 currency code, expressed as a string. */
  currency: Scalars['CurrencyCode'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mark the Terms & Conditions as being accepted by an organization */
  acceptTermsAndConditions?: Maybe<Organization>;
  /** Add a group to the organization */
  addGroup: Array<Scalars['String']>;
  /** Add a round to the event. This increments the events minimum rounds by 1 */
  addRound?: Maybe<GameState>;
  /** Joins player to given team */
  addTeamMember: TeamPayload;
  /** Add a timer to the GameState, will override any previously set. The timer id is the UUID of the timer. */
  addTimer?: Maybe<GameState>;
  /** Approves a venue, replacing all field values. Any fields not supplied will be reset to null or 0. */
  approveVenue?: Maybe<Venue>;
  /** Sets table number for a team */
  assignTableTeam: TeamPayload;
  /** Create multiple events at the same time */
  batchCreateEvents: BatchCreateResponse;
  broadcastSMS?: Maybe<Scalars['Boolean']>;
  /**
   * Cancel an event. This sets the event status to CANCELLED, but makes no other changes
   * to the event. In particular, it does not delete it, and does not remove rounds, matches,
   * results, etc.
   */
  cancelEvent?: Maybe<Event>;
  /**
   * Certify the results of a round. This mutation asks you to send all of the match results for
   * the round, even the ones that you previously sent using `recordMatchResult`, and guarantees
   * that the results you send will be stored and locked to prevent future changes. You **must** call
   * this mutation before you will be allowed to create the next round. Returns the current GameState.
   */
  certifyRound?: Maybe<CertifyRoundPayload>;
  /** Change a user's role in the scope of an organization. Returns the new role. */
  changeRole?: Maybe<Role>;
  /** Clear the preferred table number for a player */
  clearPreferredTableNumber?: Maybe<RegistrationPayload>;
  /** create a new deck. */
  createDeck?: Maybe<CreateDeckPayload>;
  /** Create a new event. */
  createEvent?: Maybe<Event>;
  /** Creates a new incident with associated infraction and penalty for an event. */
  createIncident?: Maybe<Incident>;
  /**
   * Create the next round of an event, which might be the first round if none have yet been
   * created. Returns a GameState.
   */
  createNextRound?: Maybe<GameState>;
  /** Create a new Private Event */
  createPrivateEvent?: Maybe<PrivateEvent>;
  /** Creates multiple events using a recurrence. */
  createRecurringEvents?: Maybe<RecurringEventResponse>;
  /** Create new team for event */
  createTeam: TeamPayload;
  /** Creates new incidents for a team of players. */
  createTeamIncident: Array<Incident>;
  /** creates a timer */
  createTimer: Timer;
  /** Create a new venue in the scope of an organization. */
  createVenue?: Maybe<Venue>;
  /**
   * Cut the event to the top 8. If this is a draft-type event, this will set the event
   * status to DRAFTING and initialize the `top8Pods` and the three top 8-related
   * timer fields. If this is a sealed event, this will set the event status to
   * DECKCONSTRUCTION. For constructed events, this will do nothing (but will do no harm).
   */
  cutToTop8?: Maybe<GameState>;
  /** delete an existing  deck by deck ID. */
  deleteDeck?: Maybe<DeleteDeckPayload>;
  /** Deletes an existing incident. */
  deleteIncident?: Maybe<Incident>;
  /** Creates multiple events using a recurrence. */
  deleteRecurringEvents?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Deletes team from event */
  deleteTeam?: Maybe<Scalars['String']>;
  /** delete a timer when you're done with it */
  deleteTimer?: Maybe<Timer>;
  /** Unregisters all members of a team */
  deregisterTeam: TeamPayload;
  /** Drop yourself as aplayer from the match / event */
  dropSelf?: Maybe<GameState>;
  /**
   * Drop a team from the current round. The team will not be paired in the next round, and
   * any unplayed games will be credited to their opponent (assuming the opponent has not also
   * dropped).
   */
  dropTeam?: Maybe<GameState>;
  /**
   * Drop multiple team from the current round. The team will not be paired in the next round, and
   * any unplayed games will be credited to their opponent (assuming the opponent has not also
   * dropped).
   */
  dropTeams?: Maybe<GameState>;
  /** End an event. Will update the event status to ENDED, and set its actualEndTime. */
  endEvent?: Maybe<Event>;
  /** Moves the selected players from the companion lobby to be registered into the event. */
  expeditePlayersRegistration?: Maybe<Event>;
  /** Gets specific team from event by the team code. */
  getTeamByCode: TeamPayload;
  /**
   * DEPRECATED. Use the query on the Event type for 'teams' instead.
   * Get all teams for an event
   */
  getTeams: Array<TeamPayload>;
  /** Grant admin-level rights to a user, for all organizations. */
  grantAdmin?: Maybe<User>;
  /** Grant a specific role to a user in the scope of an organization. Returns the role that was granted. */
  grantRole?: Maybe<Role>;
  /** Grant Twilio admin-level rights to a user */
  grantTwilioAdmin: Scalars['String'];
  /** Reserve a spot for an Event */
  joinEvent: Scalars['String'];
  /**
   * Moves the selected players from the companion lobby to be registered into the event after the event has been started.
   * Because this is after an event has already started the players will also be added to the event in Gamekeeper
   */
  lateRegisterCompanionPlayer?: Maybe<Event>;
  /**
   * Register a guest player for an event after registration has concluded. The player will be
   * added to the event and given a match loss in each round that was paired before the player
   * was added. Players may not be registered late for Draft events or for Single Elimination
   * events, nor may they be added late once a cut to playoffs has been made; in each case an
   * error will be returned.
   */
  lateRegisterGuestPlayer?: Maybe<Event>;
  /**
   * Register a player for an event after registration has concluded, using their email address.
   * Like initial registration, we will look up the email in the platform API to try to match it
   * to a known Wizards account, and return an error if we don't find one. If this lookup is
   * successful, the player will be added to the event and given a match loss in each round that
   * was paired before the player was added. Players may not be registered late for Draft events
   * or for Single Elimination events, nor may they be added late once a cut to playoffs has been
   * made; in each case an error will be returned.
   */
  lateRegisterPlayerByEmail?: Maybe<Event>;
  /** Locks team and keeps new players from joining */
  lockTeam: TeamPayload;
  /**
   * Record the result of a single match in a round. The result is assumed to be final; that is,
   * the client should not send game results one at a time as the games are finished, but
   * instead wait until the match has concluded and send a match score. Returns the current
   * GameState.
   */
  recordMatchResult?: Maybe<GameState>;
  /** Register a new guest (anonymous) player for the event. */
  registerGuestPlayer?: Maybe<Event>;
  /**
   * Move a player from the interested list (a reservation) to the registered list (a registration).
   * Reservations always have a valid persona ID. The same player will never appear in both lists;
   * this mutation converts a reservation to a registration.
   */
  registerInterestedPlayer?: Maybe<Event>;
  /**
   * Register a new player for the event, using their email address. We will look up the email in the
   * platform API to try to match it to a known Wizards account. If we find a match, the new registration
   * will have status FOUND; otherwise this mutation will return an error.
   */
  registerPlayerByEmail?: Maybe<Event>;
  /** Registers all members of a team */
  registerTeam: TeamPayload;
  /** Remove a group from the organization */
  removeGroup: Array<Scalars['String']>;
  /**
   * Remove a player from the registered list. If the player was previously on the interested list,
   * they will return to it. `id` is the ID of the Registration.
   *
   * TODO: remove requirement to pass `eventId`
   */
  removeRegisteredPlayer?: Maybe<Event>;
  /** Removes the active round and all match results for that round and moves the Event back to the previous round. */
  removeRound?: Maybe<GameState>;
  /** Removes player from team */
  removeTeamMember: TeamPayload;
  /** Revoke admin-level rights from a user. */
  revokeAdmin?: Maybe<User>;
  /** Revoke a specific role from a user in the scope of an organization. Returns `true` if the revocation succeeded. */
  revokeRole?: Maybe<Scalars['Boolean']>;
  /** Revoke Twilio  admin-level rights from a user. */
  revokeTwilioAdmin: Scalars['String'];
  /** Submit user feedback. */
  sendFeedback?: Maybe<Feedback>;
  sendSMS: SendSmsStatus;
  /** Sets the PodPairingType that will determine the PairingStrategy to be used for a Swiss Draft event */
  setPodPairingType?: Maybe<GameState>;
  /** Set the preferred table number to seat a player who needs some kind of accomodation. */
  setPreferredTableNumber?: Maybe<RegistrationPayload>;
  /**
   * Supply a first and last name for a registered player in the context of a specific event.
   * This name information is stored temporarily and will be deleted within 7 days of the end
   * of the event. It does _not_ replace the name information in the Platform system (if any),
   * and it is not shared between events.
   */
  setRegisteredPlayerName?: Maybe<Registration>;
  /** changes an existing timer */
  setTimer?: Maybe<Timer>;
  /** Start the deck construction timer. Only valid for a sealed event (e.g., `SEALED_DECK`). */
  startDeckConstructionTimer?: Maybe<GameState>;
  /** Start the draft timer. Only valid for a draft-type event (e.g., `WOTC_DRAFT`). */
  startDraftTimer?: Maybe<GameState>;
  /**
   * Start an event. Will update the event status to RUNNING, set its actualStartTime, and (if
   * the event is a WOTC_DRAFT) perform podding for the first round.
   */
  startEvent?: Maybe<Event>;
  /** Start the round timer. */
  startRoundTimer?: Maybe<GameState>;
  /**
   * Cancel a drop and return the team to the event. This is not the same as a Late Add, and it
   * should only be used before the round result is certified.
   */
  undropTeam?: Maybe<GameState>;
  /** Unlocks a locked team */
  unlockTeam: TeamPayload;
  /** update an existing deck. */
  updateDeck?: Maybe<UpdateDeckPayload>;
  /**
   * Update an event's details. Does not change an event's status; use the specific event status
   * mutations for that purpose.
   */
  updateEvent?: Maybe<Event>;
  /** Updates an existing incident. */
  updateIncident?: Maybe<Incident>;
  /** Creates multiple events using a recurrence. */
  updateRecurringEvents?: Maybe<RecurringEventResponse>;
};


export type MutationAcceptTermsAndConditionsArgs = {
  input: AcceptTermsAndConditionsInput;
};


export type MutationAddGroupArgs = {
  input: GroupInput;
};


export type MutationAddRoundArgs = {
  id: Scalars['ID'];
};


export type MutationAddTeamMemberArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
  teamPlayer: TeamPlayerInput;
};


export type MutationAddTimerArgs = {
  input: SetRoundTimerInput;
};


export type MutationApproveVenueArgs = {
  input: ApproveVenueInput;
};


export type MutationAssignTableTeamArgs = {
  eventId: Scalars['ID'];
  table: Scalars['Int'];
  teamCode: Scalars['String'];
};


export type MutationBatchCreateEventsArgs = {
  input: BatchCreateEventsInput;
};


export type MutationBroadcastSmsArgs = {
  input: BroadcastSmsInput;
};


export type MutationCancelEventArgs = {
  id: Scalars['ID'];
};


export type MutationCertifyRoundArgs = {
  input: Array<MatchResultInput>;
};


export type MutationChangeRoleArgs = {
  input: ChangeRoleInput;
};


export type MutationClearPreferredTableNumberArgs = {
  input: ClearPreferredTableNumberInput;
};


export type MutationCreateDeckArgs = {
  input: CreateDeckInput;
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateIncidentArgs = {
  input: CreateIncidentInput;
};


export type MutationCreateNextRoundArgs = {
  id: Scalars['ID'];
  timerID?: Maybe<Scalars['ID']>;
};


export type MutationCreatePrivateEventArgs = {
  input: CreatePrivateEventInput;
};


export type MutationCreateRecurringEventsArgs = {
  input: CreateRecurringEventInput;
};


export type MutationCreateTeamArgs = {
  eventId: Scalars['ID'];
  players?: Maybe<Array<Maybe<TeamPlayerInput>>>;
};


export type MutationCreateTeamIncidentArgs = {
  input: CreateTeamIncidentInput;
};


export type MutationCreateTimerArgs = {
  input: CreateTimerInput;
};


export type MutationCreateVenueArgs = {
  input: CreateVenueInput;
};


export type MutationCutToTop8Args = {
  id: Scalars['ID'];
};


export type MutationDeleteDeckArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteIncidentArgs = {
  input: DeleteIncidentInput;
};


export type MutationDeleteRecurringEventsArgs = {
  input: DeleteRecurringEventInput;
};


export type MutationDeleteTeamArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationDeleteTimerArgs = {
  id: Scalars['ID'];
};


export type MutationDeregisterTeamArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationDropSelfArgs = {
  eventId: Scalars['ID'];
};


export type MutationDropTeamArgs = {
  eventId: Scalars['ID'];
  teamId: Scalars['ID'];
};


export type MutationDropTeamsArgs = {
  eventId: Scalars['ID'];
  teamIds: Array<Scalars['ID']>;
};


export type MutationEndEventArgs = {
  id: Scalars['ID'];
};


export type MutationExpeditePlayersRegistrationArgs = {
  eventId: Scalars['ID'];
  input: Array<Maybe<PlayerRegistrationInput>>;
};


export type MutationGetTeamByCodeArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationGetTeamsArgs = {
  eventId: Scalars['ID'];
};


export type MutationGrantAdminArgs = {
  id: Scalars['ID'];
};


export type MutationGrantRoleArgs = {
  input: RoleInput;
};


export type MutationGrantTwilioAdminArgs = {
  id: Scalars['ID'];
};


export type MutationJoinEventArgs = {
  id: Scalars['ID'];
};


export type MutationLateRegisterCompanionPlayerArgs = {
  eventId: Scalars['ID'];
  input: Array<Maybe<PlayerRegistrationInput>>;
};


export type MutationLateRegisterGuestPlayerArgs = {
  eventId: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationLateRegisterPlayerByEmailArgs = {
  emailAddress: Scalars['String'];
  eventId: Scalars['ID'];
};


export type MutationLockTeamArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationRecordMatchResultArgs = {
  input: MatchResultInput;
};


export type MutationRegisterGuestPlayerArgs = {
  eventId: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationRegisterInterestedPlayerArgs = {
  eventId: Scalars['ID'];
  personaId: Scalars['ID'];
};


export type MutationRegisterPlayerByEmailArgs = {
  emailAddress: Scalars['String'];
  eventId: Scalars['ID'];
};


export type MutationRegisterTeamArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationRemoveGroupArgs = {
  input: GroupInput;
};


export type MutationRemoveRegisteredPlayerArgs = {
  eventId: Scalars['ID'];
  id: Scalars['ID'];
};


export type MutationRemoveRoundArgs = {
  id: Scalars['ID'];
};


export type MutationRemoveTeamMemberArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
  teamPlayer: TeamPlayerInput;
};


export type MutationRevokeAdminArgs = {
  id: Scalars['ID'];
};


export type MutationRevokeRoleArgs = {
  input: RoleInput;
};


export type MutationRevokeTwilioAdminArgs = {
  id: Scalars['ID'];
};


export type MutationSendFeedbackArgs = {
  input: FeedbackInput;
};


export type MutationSendSmsArgs = {
  input: SendSmsInput;
};


export type MutationSetPodPairingTypeArgs = {
  eventId: Scalars['ID'];
  podPairingType: PodPairingType;
};


export type MutationSetPreferredTableNumberArgs = {
  input: SetPreferredTableNumberInput;
};


export type MutationSetRegisteredPlayerNameArgs = {
  input: SetRegisteredPlayerNameInput;
};


export type MutationSetTimerArgs = {
  input: SetTimerInput;
};


export type MutationStartDeckConstructionTimerArgs = {
  id: Scalars['ID'];
};


export type MutationStartDraftTimerArgs = {
  id: Scalars['ID'];
};


export type MutationStartEventArgs = {
  input: StartEventInput;
};


export type MutationStartRoundTimerArgs = {
  id: Scalars['ID'];
};


export type MutationUndropTeamArgs = {
  eventId: Scalars['ID'];
  teamId: Scalars['ID'];
};


export type MutationUnlockTeamArgs = {
  eventId: Scalars['ID'];
  teamCode: Scalars['String'];
};


export type MutationUpdateDeckArgs = {
  input: UpdateDeckInput;
};


export type MutationUpdateEventArgs = {
  input: UpdateEventInput;
};


export type MutationUpdateIncidentArgs = {
  input: UpdateIncidentInput;
};


export type MutationUpdateRecurringEventsArgs = {
  input: UpdateRecurringEventInput;
};

/** An organization that hosts events, such as a local game store. */
export type Organization = {
  __typename?: 'Organization';
  /**
   * When the Store Owner most recently accepted the Terms & Conditions.
   * If they have not accepted at all, this will be null.
   */
  acceptedTermsAndConditionsAt?: Maybe<Scalars['DateTime']>;
  /** The available event templates that this organization can use */
  availableTemplates: Array<EventTemplate>;
  /** The organization's primary email address. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The groups that the organization is a part of */
  groups: Array<OrganizationGroup>;
  id: Scalars['ID'];
  /** `true` if the organization has Premium status. */
  isPremium?: Maybe<Scalars['Boolean']>;
  /** The latitude of the organization's primary location. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of the organization's primary location. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the organization. */
  name: Scalars['String'];
  /** The organization's primary phone number. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The primary postal address of the organization. */
  postalAddress: Scalars['String'];
  /**
   * The roles that have been granted for this organization specifically. Does not
   * include WPN_ADMIN grants, which are not organization-specific.
   */
  roles: Array<Role>;
  templateUsages: Array<TemplateUsage>;
  /** A list of the venues for this organization. */
  venues: Array<Venue>;
  /** The organization's primary web site URL. */
  website?: Maybe<Scalars['String']>;
};

export type OrganizationGroup = {
  __typename?: 'OrganizationGroup';
  /** The id of this group that comes from Contentful */
  id: Scalars['ID'];
  /** The name of this group that is retrieved from Contentful */
  name?: Maybe<Scalars['String']>;
  /** If this group marks this organization that it can only host Online events */
  onlineOnly?: Maybe<Scalars['Boolean']>;
};

export type OrganizationGroupOption = {
  __typename?: 'OrganizationGroupOption';
  id: Scalars['ID'];
  name: Scalars['String'];
};

/** A OwnedDeckConnection provides paginated result set of decks owned by current user. */
export type OwnedDeckConnection = {
  __typename?: 'OwnedDeckConnection';
  deckPageInfo: DeckPageInfo;
  nodes?: Maybe<Array<Maybe<Deck>>>;
};

/** A relay-style type for pagination information. NB: does not follow the Relay spec. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Which page of results the returned list represents, in the context of `pageSize`. */
  page: Scalars['Int'];
  /** The number of results per page that was used for the search. */
  pageSize: Scalars['Int'];
  /** The total number of results that were found for the search. */
  totalResults: Scalars['Int'];
};

/**
 * The pairing method of an event is used to determine how players are paired
 * against each other (except for "player list only", since we do not perform
 * any pairings at all in that case).
 */
export enum PairingType {
  /** pairing__player-list-only */
  PlayerListOnly = 'PLAYER_LIST_ONLY',
  /** pairing__single-elimination */
  SingleElimination = 'SINGLE_ELIMINATION',
  /** pairing__swiss */
  Swiss = 'SWISS'
}

/** A penalty for an incident */
export type Penalty = {
  __typename?: 'Penalty';
  /** The type-specific, unique-identifier of this penalty */
  id: Scalars['ID'];
  /** The name of the penalty, e.g. Warning, Disqualification */
  name: Scalars['String'];
  /** The order this penalty should be displayed when in a list */
  order: Scalars['Int'];
};

/** Whether this registration matches a Wizards account, a guest Wizards account, or has no match. */
export enum PlatformStatus {
  /** This registration matches a real Wizard account. */
  Found = 'FOUND',
  /** This registration is for a temporary guest account that has a persona ID. */
  Guest = 'GUEST',
  /** This registration does not match a real Wizards account, and will have no persona ID. */
  Notfound = 'NOTFOUND'
}

export type PlayerDroppedPayload = {
  __typename?: 'PlayerDroppedPayload';
  /** The player that was dropped. */
  droppedPlayer: User;
  /** The user who created the event. */
  eventCreator?: Maybe<User>;
  /** The ID of the event the player was dropped. */
  eventId: Scalars['ID'];
  /** If the event is a private one. */
  isPrivateEvent?: Maybe<Scalars['Boolean']>;
  /** If the player that was dropped came from a reservation */
  isReservation?: Maybe<Scalars['Boolean']>;
  /** The user who dropped the player. */
  sender?: Maybe<User>;
};

export type PlayerRegisteredPayload = {
  __typename?: 'PlayerRegisteredPayload';
  /** The player that was added. */
  addedPlayer: Registration;
  /** The user who created the event. */
  eventCreator?: Maybe<User>;
  /** The ID of the event the player was added. */
  eventId: Scalars['ID'];
  /** If the event is a private one. */
  isPrivateEvent?: Maybe<Scalars['Boolean']>;
  /** The user who added the player. */
  sender?: Maybe<User>;
};

/** List of players to be registered */
export type PlayerRegistrationInput = {
  /** The player's display name. */
  displayName?: Maybe<Scalars['String']>;
  /** The registered email address of the player. */
  emailAddress: Scalars['String'];
  /** The player's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The player's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The persona ID of the player. */
  personaId: Scalars['ID'];
  /** The ID of the registration. */
  registrationId?: Maybe<Scalars['ID']>;
};

export type Pod = {
  __typename?: 'Pod';
  /**
   * The pod number, a simple 1-based index. Not expected to correspond directly to
   * any particular real-world table number.
   */
  number: Scalars['Int'];
  /** The list of seat assignments for the pod. */
  seats: Array<Seat>;
};

/**
 * Determines the way that a Swiss Draft event will create it's pairings. InPod will only create pairings with other players
 * in the same pod. While CrossPod will create pairings based on all possible pairings with any of the other players in their
 * own pod or another.
 */
export enum PodPairingType {
  /** Pairings will consider all pods */
  CrossPod = 'CROSS_POD',
  /** Pairings will only consider the same pod */
  InPod = 'IN_POD'
}

/** The language used on the card */
export enum PrintedLanguage {
  ChineseSimplified = 'CHINESE_SIMPLIFIED',
  ChineseTraditional = 'CHINESE_TRADITIONAL',
  English = 'ENGLISH',
  French = 'FRENCH',
  German = 'GERMAN',
  Italian = 'ITALIAN',
  Japanese = 'JAPANESE',
  Korean = 'KOREAN',
  Portuguese = 'PORTUGUESE',
  Russian = 'RUSSIAN',
  Spanish = 'SPANISH'
}

/** An Private Event is an Play used by companion app users. It is not associated with any organization */
export type PrivateEvent = {
  __typename?: 'PrivateEvent';
  /** A short summery of an event */
  description?: Maybe<Scalars['String']>;
  /** The format of the event. Required */
  format: EventFormatEnum;
  /** The number of games until a win. Required */
  gamesToWin: Scalars['Int'];
  /** EventID */
  id: Scalars['ID'];
  /** The pairing method for the event. Required */
  pairingType: PairingType;
  /** A Code to join the event. */
  shortCode: Scalars['String'];
  /** Name of an event */
  title?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetch a list of all WPN_ADMINs. **Currently only the `personaId` field has real data.** */
  admins: Array<User>;
  /** query to fetch a card by name , setAbbreviation, language  */
  autoCard?: Maybe<MagicCard>;
  /** Retrieve a list of all available card sets in the selected locale's language. */
  cardSets: Array<CardSet>;
  /** Query to fetch decks by id. */
  deck: Deck;
  /** Get an event by ID. */
  event?: Maybe<Event>;
  /** Retrieve a list of all available event formats in the selected locale's language. */
  eventFormats: Array<EventFormat>;
  /**
   * Get one page of events for an organization, subject to filtering. Without a filter, returns
   * the earliest 30 events.
   */
  eventPage: EventPage;
  eventTemplates: Array<EventTemplate>;
  /** Get events for an organization which are currently in progress. */
  eventsInProgress: Array<Event>;
  /** Get an incident by ID. */
  incident?: Maybe<Incident>;
  /** Retrieve a list of all available infraction categories in the selected locale's language. */
  infractionCategories: Array<InfractionCategory>;
  /** Retrieve a list of all available infractions in the selected locale's language. */
  infractions: Array<Infraction>;
  /** query to fetch a card by id. */
  magicCard?: Maybe<MagicCard>;
  /** query to fetch all MagicCard subTypes in English. */
  magicCardOracleSubTypes?: Maybe<MagicCardOracleSubType>;
  /** Search against the database of MagicCardPrintings */
  magicCardPrintings?: Maybe<MagicCardPrintingSearchResult>;
  /** query to fetch all MagicCard setNames in English. */
  magicCardSets?: Maybe<Array<Maybe<MagicCardSets>>>;
  /** Search against the database of MagicCards */
  magicCards?: Maybe<MagicCardSearchResult>;
  /** Fetch the currently logged-in user. */
  me: User;
  /** Get active events of current user. */
  myActiveEvents: Array<Event>;
  /** Retrieve the current server time in UTC. */
  now?: Maybe<Scalars['DateTime']>;
  /** Get an organization by ID. */
  organization?: Maybe<Organization>;
  /** Search for organizations. */
  organizations?: Maybe<Array<Organization>>;
  /** Retrieve a list of all decks owned by the current user. */
  ownedDecks: OwnedDeckConnection;
  /** Retrieve a list of all available penalties in the selected locale's language. */
  penalties: Array<Penalty>;
  /** query to fetch a random MagicCard. */
  randomCard?: Maybe<MagicCard>;
  /** Get an event by ID with the recurrence fields present. */
  recurrenceEvent?: Maybe<RecurrenceEvent>;
  /** query to fetch a timer by ID. */
  timer: Timer;
  /** Fetches a list of all TWILIO ADMINS user details */
  twilioAdmins: Array<User>;
  /**
   * Get one user by personaId or by email address. Will return an error if neither
   * `personaId` nor `emailAddress` is provided to search by. If both are provided,
   * `emailAddress` is ignored.
   */
  user?: Maybe<User>;
  /** Retrieve a Venue by ID. */
  venue?: Maybe<Venue>;
};


export type QueryAutoCardArgs = {
  language?: Maybe<PrintedLanguage>;
  name: Scalars['String'];
  setAbbreviation?: Maybe<Scalars['String']>;
};


export type QueryCardSetsArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryDeckArgs = {
  id: Scalars['ID'];
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventFormatsArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryEventPageArgs = {
  filter?: Maybe<EventFilter>;
  organizationId: Scalars['ID'];
};


export type QueryEventsInProgressArgs = {
  organizationId: Scalars['ID'];
};


export type QueryIncidentArgs = {
  eventId?: Maybe<Scalars['ID']>;
  id: Scalars['ID'];
};


export type QueryInfractionCategoriesArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryInfractionsArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryMagicCardArgs = {
  id: Scalars['String'];
};


export type QueryMagicCardPrintingsArgs = {
  filter: MagicCardPrintingFilterInput;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<MagicCardSortInput>;
};


export type QueryMagicCardsArgs = {
  filter: MagicCardFilterInput;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<MagicCardSortInput>;
};


export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};


export type QueryOrganizationsArgs = {
  partialName?: Maybe<Scalars['String']>;
};


export type QueryOwnedDecksArgs = {
  page?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};


export type QueryPenaltiesArgs = {
  locale?: Maybe<Scalars['String']>;
};


export type QueryRecurrenceEventArgs = {
  eventId: Scalars['ID'];
  organizationId: Scalars['ID'];
};


export type QueryTimerArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  emailAddress?: Maybe<Scalars['String']>;
  personaId?: Maybe<Scalars['ID']>;
};


export type QueryVenueArgs = {
  id: Scalars['ID'];
};

/** An input type to evaluate cards by a range of integers */
export type RangeFilterInput = {
  equal?: Maybe<Scalars['Int']>;
  greaterThan?: Maybe<Scalars['Int']>;
  greaterThanEqualto?: Maybe<Scalars['Int']>;
  lessThan?: Maybe<Scalars['Int']>;
  lessThanEqualto?: Maybe<Scalars['Int']>;
};

/** An event that includes recurrence info as well */
export type RecurrenceEvent = {
  __typename?: 'RecurrenceEvent';
  /**
   * The time at which an authorized user ended the event. Not necessarily the same
   * time that its last round ended. `null` unless the event has been ended.
   */
  actualEndTime?: Maybe<Scalars['DateTime']>;
  /**
   * The time at which an authorized user started the event. Not necessarily the same
   * time that its first round began. `null` unless the event has been started.
   */
  actualStartTime?: Maybe<Scalars['DateTime']>;
  /**
   * The street address of the event's location. Does not include HTML; uses line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** The persona id of the user that created this event. */
  createdBy?: Maybe<Scalars['ID']>;
  /** The description of the event. */
  description?: Maybe<Scalars['String']>;
  /** Day of the week mask, used only for creating recurring events when the frequency is WEEKLY */
  dotWMask?: Maybe<Scalars['Int']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The entry fee for this event, if any. Defaults to zero US dollars. */
  entryFee: Money;
  /** An estimate of when the event will conclude. */
  estimatedEndTime?: Maybe<Scalars['DateTime']>;
  /** The official event template id that this event is currently using */
  eventTemplate?: Maybe<EventTemplate>;
  /** DEPRECATED. The format of the event. Please use eventFormat instead. */
  format?: Maybe<EventFormatEnum>;
  /** The frequency at which to create a group of recurring events */
  frequency: RecurrenceFrequency;
  /** If an event was created as part of a group this will have a value. Otherwise it will be null. */
  groupId?: Maybe<Scalars['ID']>;
  /** If this event will have a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Is the recurrence Day of the Week bound, used only for creating recurring events when the frequency is MONTHLY */
  isDotWBound?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /** The latitude of the event's location. */
  latitude?: Maybe<Scalars['Float']>;
  /**
   * DEPRECATED. If this event has a Limited format (such as Draft or Sealed), the set that
   * will be in use. Please use cardSet instead.
   */
  limitedSet?: Maybe<LimitedSet>;
  /** The longitude of the event's location. */
  longitude?: Maybe<Scalars['Float']>;
  /**
   * The number of players currently registered for this event. This is a simple count
   * of registrations; does not subtract drops.
   */
  numberOfPlayers?: Maybe<Scalars['Int']>;
  /** The organization that is running the event. */
  organization: Organization;
  /** The pairing method for the event. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The date that the recurrence should stop trying to create events at, in ISO format. */
  repeatUntil: Scalars['String'];
  /** The number of players per team in the event. */
  requiredTeamSize?: Maybe<Scalars['Int']>;
  /** The Rules Enforcement Level for the event. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /**
   * The time that the event is scheduled to begin, for use in calendaring tools. This
   * is not necessarily the time that the event will actually begin.
   */
  scheduledStartTime?: Maybe<Scalars['DateTime']>;
  /**
   * A short (generally 6-character) string that uniquely identifies this event. Used
   * by the player experience for easy event signup.
   */
  shortCode?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /**
   * Events are in the SCHEDULED status upon creation and until they are explicitly
   * started by an authorized user. When they are started, they will transition to
   * DRAFTING. When the first round is started, the event will move to ROUNDACTIVE
   * and then ROUNDCERTIFIED once all scores for the round are recorded. It moves
   * back and forth between ROUNDACTIVE and ROUNDCERTIFIED until the last round
   * has been certified. When an authorized user ends the event, it will move to
   * ENDED. An event will be CANCELLED only if it is deleted without ever having
   * been started.
   */
  status: EventStatus;
  /** The tags used by Store and Event Locator for this event. */
  tags: Array<Scalars['String']>;
  /** The time zone where the event is being held. */
  timeZone: Scalars['String'];
  /** The title of the event. */
  title: Scalars['String'];
  /**
   * The venue hosting the event. If this field is `null`, then the event is happening
   * at the organization's location.
   */
  venue?: Maybe<Venue>;
};

/**
 * The frequency, that when creating a group of recurring events, the events
 * created are bound by. This will result in how the events are created and
 * how many are created.
 */
export enum RecurrenceFrequency {
  /** frequency__daily */
  Daily = 'DAILY',
  /** frequency__monthly */
  Monthly = 'MONTHLY',
  /** frequency__weekly */
  Weekly = 'WEEKLY'
}

/** A list of events that when using Recurring Event Creation */
export type RecurringEventResponse = {
  __typename?: 'RecurringEventResponse';
  /** If the maximum amount of events that can be created at one time was hit. */
  eventMaxCountHit: Scalars['Boolean'];
  /** If the maximum date range allowed was hit. */
  eventMaxDateHit: Scalars['Boolean'];
  /** The events themselves that have been created. */
  recurringEvents: Array<Event>;
};

/** A participant in an event, who may or may not match a user in the platform accounts system. */
export type Registration = {
  __typename?: 'Registration';
  /** The registrant's display name as returned from Platform. */
  displayName?: Maybe<Scalars['String']>;
  /** The registrant's email address as returned from Platform. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The registrant's first name. */
  firstName?: Maybe<Scalars['String']>;
  /**
   * The ID of the registration. BEWARE: the ID of a registration of an interestedPlayer may match
   * the ID of a registration of a *different* registeredPlayer. This is expected to be OK because
   * we don't provide any mutations that refer to the ID of an interestedPlayer.
   */
  id: Scalars['ID'];
  /** Get an incident by ID. */
  incidents?: Maybe<Array<Maybe<Incident>>>;
  /** The registrant's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The persona ID of this registrant, if they have a Wizards account; i.e., if their status is FOUND or GUEST. */
  personaId?: Maybe<Scalars['ID']>;
  /** Preferred table number (for players that need some accomodation). */
  preferredTableNumber?: Maybe<Scalars['Int']>;
  /** Whether we found a Wizards account matching this registrant, or created a guest account for them. */
  status?: Maybe<PlatformStatus>;
};


/** A participant in an event, who may or may not match a user in the platform accounts system. */
export type RegistrationIncidentsArgs = {
  eventId: Scalars['ID'];
};

export type RegistrationPayload = {
  __typename?: 'RegistrationPayload';
  /** The registration impacted by the mutation. */
  registration: Registration;
};

export type RegistrationUpdatedPayload = {
  __typename?: 'RegistrationUpdatedPayload';
  /** The registrant's display name. */
  displayName?: Maybe<Scalars['String']>;
  /** The ID of the event. */
  eventId: Scalars['ID'];
  /** The registrant's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The registrant's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The persona ID of the registrant. */
  personaId: Scalars['ID'];
  /** The registrant's preferred table number, if any. */
  preferredTableNumber?: Maybe<Scalars['Int']>;
  /** The ID of the registration. */
  registrationId: Scalars['ID'];
  /** Whether this registrant is a guest or has a Wizards account. */
  status?: Maybe<PlatformStatus>;
};

export type ReservationNotificationPayload = {
  __typename?: 'ReservationNotificationPayload';
  /** The reservations display name. */
  displayName?: Maybe<Scalars['String']>;
  /** The reservation's email address. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The ID of the event. */
  eventId: Scalars['ID'];
  /** The reservation's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** The reservation's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The persona ID of the reservation. */
  personaId: Scalars['ID'];
  /** The ID of the reservation. */
  reservationId: Scalars['ID'];
};

export type Resp = {
  __typename?: 'Resp';
  /** Delivery Response */
  deliveryStatus: Scalars['String'];
  /** Message Delivered Status */
  isDelivered?: Maybe<Scalars['Boolean']>;
  /** Subscriber Number */
  mobileNumber: Scalars['String'];
};

/**
 * An role grants a particular user permissions to take actions in the scope of an
 * organization. The exception is the WPN_ADMIN role, which is global in scope and
 * not tied to any particular organization. The `organization` field will be `null`
 * in this case.
 */
export type Role = {
  __typename?: 'Role';
  organization?: Maybe<Organization>;
  roleName: RoleName;
  user: User;
};

export type RoleChangedPayload = {
  __typename?: 'RoleChangedPayload';
  /** The players display name whose role has been changed */
  displayName?: Maybe<Scalars['String']>;
  /** The players first name whose role has been changed */
  firstName?: Maybe<Scalars['String']>;
  /** The players last name whose role has been changed */
  lastName?: Maybe<Scalars['String']>;
  /** The organization under which this role change occurred. */
  organizationId: Scalars['ID'];
  /** The player whose role has been changed */
  personaId: Scalars['ID'];
  /** The name of the role that was changed */
  roleName: Scalars['String'];
};

/** The input type for role mutations that are scoped to an organization. */
export type RoleInput = {
  organizationId: Scalars['ID'];
  personaId: Scalars['ID'];
  roleName: RoleName;
};

export enum RoleName {
  Scorekeeper = 'SCOREKEEPER',
  StoreAdmin = 'STORE_ADMIN',
  StoreOwner = 'STORE_OWNER',
  TwilioAdmin = 'TWILIO_ADMIN',
  WpnAdmin = 'WPN_ADMIN'
}

export type Round = {
  __typename?: 'Round';
  /** If present, the time that the round ended. */
  actualEndTime?: Maybe<Scalars['DateTime']>;
  /** If present, the time that the round began, measured from the time that the round timer was started. */
  actualStartTime?: Maybe<Scalars['DateTime']>;
  /** Is this a round that the rollback option is available */
  canRollback?: Maybe<Scalars['Boolean']>;
  /** A fabricated ID, used so that Apollo Client can easily cache Round objects. */
  id: Scalars['ID'];
  /** Have this round's scores been certified? */
  isCertified?: Maybe<Scalars['Boolean']>;
  /** Is this the final round? */
  isFinalRound?: Maybe<Scalars['Boolean']>;
  /** If this round is a Playoff round */
  isPlayoff?: Maybe<Scalars['Boolean']>;
  /** The matches (pairings) for this round. */
  matches: Array<Match>;
  /** The round number. The first round is numbered 1. */
  number: Scalars['Int'];
  /** The pairingStrategy for this round. */
  pairingStrategy?: Maybe<Scalars['String']>;
  /** If present, the time at which the round timer reaches 0. */
  roundTimerExpirationTime?: Maybe<Scalars['DateTime']>;
  /** GUID or UUID of that represents Timer ID of Timer GraphQL */
  timerID?: Maybe<Scalars['ID']>;
};

/** Details about what phase of the UI should happen next. */
export type RoundMetadata = {
  __typename?: 'RoundMetadata';
  /** Does the next round have a preceding deck construction step? */
  hasDeckConstruction?: Maybe<Scalars['Boolean']>;
  /** Does the next round have a preceding draft step? */
  hasDraft?: Maybe<Scalars['Boolean']>;
};

/** A rule will hold the type of rule as well as the value that the WPN Admin has given in Contentful */
export type Rule = {
  __typename?: 'Rule';
  rule: Scalars['String'];
  value?: Maybe<Scalars['JSON']>;
};

/**
 * Rules Enforcement Levels (REL) are a means to communicate to the players
 * and judges what expectations they can have of the tournament in terms of
 * rigidity of rules enforcement, technically correct play, and procedures used.
 * The description of each enum value gives you the i18n key of the format name.
 */
export enum RulesEnforcementLevel {
  /** rel__casual */
  Casual = 'CASUAL',
  /** rel__competitive */
  Competitive = 'COMPETITIVE',
  /** rel__professional */
  Professional = 'PROFESSIONAL',
  /** rel__regular */
  Regular = 'REGULAR'
}

/**
 * This interface formalizes the API's mechanism for pagination to guarantee that
 * is the same across different kinds of searches
 */
export type SearchResult = {
  /**
   * The number of results returned for this page of the search; will always be
   * equal to or less than the limit specified on the query
   */
  currentPage: Scalars['Int'];
  /** Whether there exist search results beyond the end of this page */
  hasNextPage?: Maybe<Scalars['Boolean']>;
  /** Whether there exist search results before this page */
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
  /**
   * The total number of results for this search that exist in the data
   * store.Includes all results, not just those returned on this page
   */
  totalPages: Scalars['Int'];
  /** The total number of results for this search */
  totalResults: Scalars['Int'];
};

export type Seat = {
  __typename?: 'Seat';
  /** The display name of the player assigned to this seat, if any. */
  displayName?: Maybe<Scalars['String']>;
  /** The email address of the player assigned to this seat, if any. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The first name of the player assigned to this seat, if any. */
  firstName?: Maybe<Scalars['String']>;
  /** The last name of the player assigned to this seat, if any. */
  lastName?: Maybe<Scalars['String']>;
  /**
   * The seat number, a simple 1-based index. Not expected to correspond directly to
   * any particular real-world seat number.
   */
  number: Scalars['Int'];
  /** The persona ID of the player assigned to this seat, if any. */
  personaId?: Maybe<Scalars['ID']>;
  /** Id of the team associated with the player */
  team?: Maybe<Team>;
};

/** The Response type received from Twillio Service */
export type SendSmsStatus = {
  __typename?: 'SendSMSStatus';
  /** Failure Count */
  failureCount: Scalars['Int'];
  /** SMS status response */
  resp: Array<Resp>;
  /** Success count */
  successCount: Scalars['Int'];
};

export type SetPreferredTableNumberInput = {
  /** The ID of the event that the registration belongs to. */
  eventId: Scalars['ID'];
  /** The ID of the registration. */
  id: Scalars['ID'];
  /** The table number to set for the player */
  tableNumber: Scalars['Int'];
};

export type SetRegisteredPlayerNameInput = {
  /** The ID of the event that the registration belongs to. */
  eventId: Scalars['ID'];
  /** The new first name for the player, if any. */
  firstName?: Maybe<Scalars['String']>;
  /** The ID of the registration. */
  id: Scalars['ID'];
  /** The new last name for the player, if any. */
  lastName?: Maybe<Scalars['String']>;
};

export type SetRoundTimerInput = {
  /** The id of the event that contains the round we will be updating. */
  eventId: Scalars['ID'];
  /** The round to set this timer id on. */
  roundNumber: Scalars['Int'];
  /** The id of the timer that we will be setting on for the round given. */
  timerId: Scalars['ID'];
};

/** The input type for resetting a Timer. */
export type SetTimerInput = {
  /** The number of milliseconds to count down from. */
  durationMs: Scalars['Int'];
  /** The ID of the timer to reset. */
  id: Scalars['ID'];
  /** The state the timer should start in. */
  state: TimerState;
};

/** Order in which magic cards can sorted */
export enum SortOrder {
  /** ascending order */
  Asc = 'ASC',
  /** descending order */
  Desc = 'DESC'
}

export type StartEventInput = {
  /** The ID of the construction Draft Timer ID */
  constructDraftTimerID?: Maybe<Scalars['ID']>;
  /** The ID of the draft Timer ID. */
  draftTimerID?: Maybe<Scalars['ID']>;
  /** The ID of the event. */
  id: Scalars['ID'];
  /** The ID of the Cut to top8 Draft Timer ID */
  top8DraftTimerID?: Maybe<Scalars['ID']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  /** A user has been granted WPN Admin status */
  adminRoleGranted: AdminRoleChangedPayload;
  /** A user has lost WPN Admin status */
  adminRoleRevoked: AdminRoleChangedPayload;
  eventCreated: Event;
  eventReservationCancelled: ReservationNotificationPayload;
  eventReserved: ReservationNotificationPayload;
  /** When an event has been started */
  eventStarted: EventStartedPayload;
  eventUpdated: Event;
  /** When a result has been reported for an event */
  gameResultReported: GamekeeperNotificationPayload;
  /** When a round has been certified for an event */
  gameRoundCertified: GamekeeperNotificationPayload;
  /** When a new round is created for an event */
  gameRoundCreated: GamekeeperNotificationPayload;
  playerRegistered: PlayerRegisteredPayload;
  registrationUpdated: RegistrationUpdatedPayload;
  /** A user has been given a new role (scorekeeper, store owner, or store admin) */
  roleGranted: RoleChangedPayload;
  /** A user has lost a role (scorekeeper, store owner, or store admin) */
  roleRevoked: RoleChangedPayload;
  /** Listen to a specific events updates */
  runningEventUpdated: Event;
  teamCreated: TeamPayload;
  teamDeleted: TeamPayload;
  teamDropped: PlayerDroppedPayload;
  teamUpdated: TeamPayload;
  timerUpdated: Timer;
  venueCreated: VenueUpdatePayload;
  venueRoleGranted: RoleChangedPayload;
  venueRoleRevoked: RoleChangedPayload;
  venueUpdated: VenueUpdatePayload;
};


export type SubscriptionEventCreatedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionEventReservationCancelledArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEventReservedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionEventStartedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionEventUpdatedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionGameResultReportedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionGameRoundCertifiedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionGameRoundCreatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionPlayerRegisteredArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionRegistrationUpdatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionRunningEventUpdatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTeamCreatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTeamDeletedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTeamDroppedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTeamUpdatedArgs = {
  eventId: Scalars['ID'];
};


export type SubscriptionTimerUpdatedArgs = {
  id: Scalars['ID'];
};


export type SubscriptionVenueCreatedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionVenueRoleGrantedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionVenueRoleRevokedArgs = {
  organizationId: Scalars['ID'];
};


export type SubscriptionVenueUpdatedArgs = {
  organizationId: Scalars['ID'];
};

export type Tags = {
  __typename?: 'Tags';
  tags: Array<Scalars['String']>;
};

export type Team = {
  __typename?: 'Team';
  /** The unique key for the team to be used in the client side cache. */
  cacheId?: Maybe<Scalars['ID']>;
  /** The ID of the team. */
  id: Scalars['ID'];
  /** The name of the team. */
  name?: Maybe<Scalars['String']>;
  /** The players who make up the team. */
  players: Array<User>;
  /** Game level results */
  results?: Maybe<Array<TeamResult>>;
};

export type TeamPayload = {
  __typename?: 'TeamPayload';
  /** The ID of the event. */
  eventId: Scalars['ID'];
  /** The ID of the team. */
  id: Scalars['ID'];
  /** Determines if team is joinable */
  isLocked?: Maybe<Scalars['Boolean']>;
  /** Determines if team is registered. */
  isRegistered?: Maybe<Scalars['Boolean']>;
  /** List of players in team registered for the event. */
  registrations?: Maybe<Array<Registration>>;
  /** List of players in team reserved for the event. */
  reservations?: Maybe<Array<Registration>>;
  /** The table number that this team is currently set to. Will not always contain a value */
  tableNumber?: Maybe<Scalars['Int']>;
  /** The sort code to identify the team for joining */
  teamCode: Scalars['String'];
};

export type TeamPlayerInput = {
  /** The email for the player. */
  email?: Maybe<Scalars['String']>;
  /** The persona ID of the new player. */
  personaId: Scalars['String'];
  /** The ID of the registration. */
  registrationId?: Maybe<Scalars['ID']>;
  /** The ID of the reservation. */
  reservationId?: Maybe<Scalars['ID']>;
};

export type TeamResult = {
  __typename?: 'TeamResult';
  /** holds game-level draws */
  draws: Scalars['Int'];
  /** Is this result a bye */
  isBye?: Maybe<Scalars['Boolean']>;
  /** Is this a final result */
  isFinal?: Maybe<Scalars['Boolean']>;
  /** Is this result currently a playoff result */
  isPlayoffResult?: Maybe<Scalars['Boolean']>;
  /** Is the submitter a TO */
  isTO?: Maybe<Scalars['Boolean']>;
  /** The current results losses */
  losses?: Maybe<Scalars['Int']>;
  /** The Persona id of the submitter for this result */
  submitter: Scalars['ID'];
  /** The id for which team this result applies to */
  teamId: Scalars['ID'];
  /** The current results wins */
  wins?: Maybe<Scalars['Int']>;
};

export type TeamStanding = {
  __typename?: 'TeamStanding';
  /**
   * The number of match byes the team has recorded in this event to date. Only includes
   * results from certified rounds (i.e., not the round currently underway).
   */
  byes: Scalars['Int'];
  /**
   * The number of match draws the team has recorded in this event to date. Only includes
   * results from certified rounds (i.e., not the round currently underway).
   */
  draws: Scalars['Int'];
  /**
   * The team's gameWinPercent. See the Magic Tournament Rules for more information on
   * how this is calculated.
   */
  gameWinPercent: Scalars['Float'];
  /**
   * The number of match losses the team has recorded in this event to date. Only includes
   * results from certified rounds (i.e., not the round currently underway).
   */
  losses: Scalars['Int'];
  /** The number of points the team has scored so far in this event. */
  matchPoints: Scalars['Int'];
  /**
   * The opponentGameWinPercent. See the Magic Tournament Rules for more information on
   * how this is calculated.
   */
  opponentGameWinPercent: Scalars['Float'];
  /**
   * The opponentMatchWinPercent. See the Magic Tournament Rules for more information on
   * how this is calculated.
   */
  opponentMatchWinPercent: Scalars['Float'];
  /**
   * The rank of this standing in the scope of the event. The team with the best record
   * has rank 1, the second-best rank 2, and so on up to the number of teams in the event.
   * Even if two teams have identical records, their ranks will still differ due to our
   * various tiebreaker rules.
   */
  rank: Scalars['Int'];
  /** The team that this standing is for. */
  team: Team;
  /**
   * The number of match wins the team has recorded in this event to date. Only includes
   * results from certified rounds (i.e., not the round currently underway).
   */
  wins: Scalars['Int'];
};

export type TemplateUsage = {
  __typename?: 'TemplateUsage';
  count?: Maybe<Scalars['Int']>;
  templateId: Scalars['ID'];
};

/**
 * In order to accurately track and display times to users around the world, we
 * store datetimes in ISO 8601 format with an offset.
 */
export type Timer = {
  __typename?: 'Timer';
  /** The length of the timer, in milliseconds. 'null' if the timer is DELETED. */
  durationMs?: Maybe<Scalars['Int']>;
  /** The time that the duration of the timer begins. 'null' if the timer is DELETED. */
  durationStartTime?: Maybe<Scalars['DateTime']>;
  /** The ID of the timer. */
  id: Scalars['ID'];
  /** The current time at the server. Allows computation of timer skew. 'null' if the timer is DELETED. */
  serverTime?: Maybe<Scalars['DateTime']>;
  /** The state of the timer; whether it's running or halted. */
  state: TimerState;
};

export enum TimerState {
  /** The timer has been deleted. */
  Deleted = 'DELETED',
  /** The timer is stopped/paused. */
  Halted = 'HALTED',
  /** The timer is active. */
  Running = 'RUNNING'
}

/** The input type for role mutations that are global scoped  */
export type TwilioRoleInput = {
  personaId: Scalars['ID'];
};

/** Input type to update deck. */
export type UpdateDeckInput = {
  Id: Scalars['ID'];
  cardQuantities?: Maybe<Array<CardQuantityInput>>;
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
};

/** UpdateDeckPayload is the response type returned if Deck updation successeed. */
export type UpdateDeckPayload = {
  __typename?: 'UpdateDeckPayload';
  deck?: Maybe<Deck>;
};

/** The input type to be used when updating an event. */
export type UpdateEventInput = {
  /**
   * The street address of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Must not include HTML; use line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** If this event has a Limited format (such as Draft or Sealed), the ID of the CardSet that will be in use. */
  cardSetId?: Maybe<Scalars['ID']>;
  /** A description of the event. Should not contain HTML. */
  description?: Maybe<Scalars['String']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The cost of the event, in minor currency units (e.g., cents). Defaults to 0. */
  entryFeeAmount?: Maybe<Scalars['Int']>;
  /** The currency of the entry fee. Defaults to USD. */
  entryFeeCurrency?: Maybe<Scalars['String']>;
  /** The time that the event is estimated to end, in ISO format. */
  estimatedEndTime?: Maybe<Scalars['String']>;
  /** The ID of the EventFormat for the event. Required. */
  eventFormatId: Scalars['ID'];
  /** The official event template id that this event is currently using */
  eventTemplateId?: Maybe<Scalars['ID']>;
  /** If this event will be created with a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  /** The ID of the event. Required. */
  id: Scalars['ID'];
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /**
   * The latitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  latitude?: Maybe<Scalars['Float']>;
  /**
   * The longitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  longitude?: Maybe<Scalars['Float']>;
  /** The ID of the organization that owns this event. Required. */
  organizationId: Scalars['ID'];
  /** The pairing method for the event. Required. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The number of players per team in the event. */
  requiredTeamSize?: Maybe<Scalars['Int']>;
  /** The Rules Enforcement Level for the event. Required. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /** The time that the event is scheduled to start, in ISO format. */
  scheduledStartTime?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /** The time zone where the event is being held. Required. */
  timeZone: Scalars['String'];
  /** The title of the event. Required. */
  title: Scalars['String'];
  /**
   * The ID of the venue for the event. Must belong to the same organization as the event. If `null`,
   * the event is understood to be occurring at the store's location.
   */
  venueId?: Maybe<Scalars['ID']>;
};

export type UpdateIncidentInput = {
  /** The reporter's comments about this incident. */
  comment?: Maybe<Scalars['String']>;
  /** The ID of the event during which the incident occurred. */
  eventId: Scalars['ID'];
  /** The ID of the incident to update. */
  id: Scalars['ID'];
  /** The ID of the infraction category that occurred. */
  infractionCategoryId?: Maybe<Scalars['ID']>;
  /** The name of the infraction category that was assessed. */
  infractionCategoryName: Scalars['String'];
  /** The ID of the infraction that occurred. */
  infractionId: Scalars['ID'];
  /** The name of the infraction that was assessed. */
  infractionName: Scalars['String'];
  /** The persona ID of the offender. */
  offenderId: Scalars['ID'];
  /** The ID of the penalty that was assessed. */
  penaltyId: Scalars['ID'];
  /** The name of the penalty that was assessed. */
  penaltyName: Scalars['String'];
  /** The persona ID of the reporter. */
  reporterId: Scalars['ID'];
  /** The round number during which the incident occurred. */
  roundNumber: Scalars['Int'];
};

/** The input type to be used when updated a series of recurring events. */
export type UpdateRecurringEventInput = {
  /**
   * The street address of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Must not include HTML; use line breaks for
   * formatting.
   */
  address?: Maybe<Scalars['String']>;
  /** The ID of the base event that the series is edited from. Required. */
  baseEventId: Scalars['ID'];
  /** The maximum number of players this event supports. */
  capacity?: Maybe<Scalars['Int']>;
  /** If this event has a Limited format (such as Draft or Sealed), the ID of the CardSet that will be in use. */
  cardSetId?: Maybe<Scalars['ID']>;
  /** A description of the event. Should not contain HTML. */
  description?: Maybe<Scalars['String']>;
  /** Day of the week mask, used only for creating recurring events when the frequency is WEEKLY */
  dotWMask?: Maybe<Scalars['Int']>;
  /** The email address players can use for more information about the event. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The cost of the event, in minor currency units (e.g., cents). Defaults to 0. */
  entryFeeAmount?: Maybe<Scalars['Int']>;
  /** The currency of the entry fee. Defaults to USD. */
  entryFeeCurrency?: Maybe<Scalars['String']>;
  /** The time that the event is estimated to end, in ISO format. */
  estimatedEndTime?: Maybe<Scalars['String']>;
  /** The ID of the EventFormat for the event. Required. */
  eventFormatId: Scalars['ID'];
  /** The official event template id that this event is currently using */
  eventTemplateId?: Maybe<Scalars['ID']>;
  /** The frequency at which to create a group of recurring events */
  frequency: RecurrenceFrequency;
  /** The ID of the group to update recurring events from. Required. */
  groupId: Scalars['ID'];
  /** If this event will be created with a top 8 */
  hasTop8?: Maybe<Scalars['Boolean']>;
  /** Whether this is an ad-hoc event. */
  isAdHoc?: Maybe<Scalars['Boolean']>;
  /** Is the recurrence Day of the Week bound, used only for creating recurring events when the frequency is MONTHLY */
  isDotWBound?: Maybe<Scalars['Boolean']>;
  /** Whether this event is marked as an event that was run online. */
  isOnline?: Maybe<Scalars['Boolean']>;
  /**
   * The latitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  latitude?: Maybe<Scalars['Float']>;
  /**
   * The longitude of the event's location. This should be sourced from either the
   * venue, if present, or the organization. Required.
   */
  longitude?: Maybe<Scalars['Float']>;
  /** The ID of the organization that owns this event. Required. */
  organizationId: Scalars['ID'];
  /** The pairing method for the event. Required. */
  pairingType: PairingType;
  /** The phone number players can call for more information about the event. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** The date that the recurrence should stop trying to create events at, in ISO format. */
  repeatUntil: Scalars['String'];
  /** The number of players per team in the event. */
  requiredTeamSize?: Maybe<Scalars['Int']>;
  /** The Rules Enforcement Level for the event. Required. */
  rulesEnforcementLevel: RulesEnforcementLevel;
  /** The time that the event is scheduled to start, in ISO format. */
  scheduledStartTime?: Maybe<Scalars['String']>;
  /**
   * The table number we should start at when assigning matches to tables. Will
   * default to 1.
   */
  startingTableNumber?: Maybe<Scalars['Int']>;
  /** The time zone where the event is being held. Required. */
  timeZone: Scalars['String'];
  /** The title of the event. Required. */
  title: Scalars['String'];
  /**
   * The ID of the venue for the event. Must belong to the same organization as the event. If `null`,
   * the event is understood to be occurring at the store's location.
   */
  venueId?: Maybe<Scalars['ID']>;
};

/** A user of WER.next. May be a player, judge, organizer, or someone else. */
export type User = {
  __typename?: 'User';
  /** The user's display name as returned from Platform. */
  displayName?: Maybe<Scalars['String']>;
  /** The user's email address as returned from Platform. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The user's first name. */
  firstName?: Maybe<Scalars['String']>;
  /** Whether this user has verified their email address. Unlike the other user fields, this one is sourced directly from their JWT. */
  isEmailVerified?: Maybe<Scalars['Boolean']>;
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>;
  /** The personaId of the user. */
  personaId: Scalars['ID'];
  /** The roles that the user has been granted. */
  roles: Array<Role>;
};

/** A location where an organization hosts events. Venues subject to approval by WPN Admins. */
export type Venue = {
  __typename?: 'Venue';
  /** The physical address of the venue, formatted as plain text (with newlines). */
  address?: Maybe<Scalars['String']>;
  /** The maximum capacity of the venue. */
  capacity?: Maybe<Scalars['Int']>;
  /** City, part of the full physical address */
  city?: Maybe<Scalars['String']>;
  /** Country, part of the full physical address */
  country?: Maybe<Scalars['String']>;
  /** The email address of the venue. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The Google Place ID of the venue. */
  googlePlaceId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether this venue has been approved by the WPN team. */
  isApproved?: Maybe<Scalars['Boolean']>;
  /** The latitude of the venue. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of the venue. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the venue. */
  name: Scalars['String'];
  /** Any additional notes about the venue. */
  notes?: Maybe<Scalars['String']>;
  /** The phone number of the venue. */
  phoneNumber?: Maybe<Scalars['String']>;
  /** Postal Code, part of the full physical address */
  postalCode?: Maybe<Scalars['String']>;
  /** State/Territory, part of the full physical address */
  state?: Maybe<Scalars['String']>;
  /** The street address, part of the full physical address */
  streetAddress?: Maybe<Scalars['String']>;
  /** The time zone of the venue, taken from https://www.iana.org/time-zones */
  timeZone?: Maybe<Scalars['String']>;
};

export type VenueUpdatePayload = {
  __typename?: 'VenueUpdatePayload';
  /** The physical address of the venue, formatted as plain text (with newlines). */
  address?: Maybe<Scalars['String']>;
  /** The maximum capacity of the venue. */
  capacity?: Maybe<Scalars['Int']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  /** The email address of the venue. */
  emailAddress?: Maybe<Scalars['String']>;
  /** The Google Place ID of the venue. */
  googlePlaceId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Whether this venue has been approved by the WPN team. */
  isApproved?: Maybe<Scalars['Boolean']>;
  /** The latitude of the venue. */
  latitude?: Maybe<Scalars['Float']>;
  /** The longitude of the venue. */
  longitude?: Maybe<Scalars['Float']>;
  /** The name of the venue. */
  name: Scalars['String'];
  /** Any additional notes about the venue. */
  notes?: Maybe<Scalars['String']>;
  /** The organization that this venue update is related to */
  organizationId: Scalars['ID'];
  /** The phone number of the venue. */
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  /** The time zone of the venue, taken from https://www.iana.org/time-zones */
  timeZone?: Maybe<Scalars['String']>;
};

export type BroadcastSmsInput = {
  broadcastMessage: Scalars['String'];
};

/** All oracle subTypes of MagicCards */
export type MagicCardOracleSubType = {
  __typename?: 'magicCardOracleSubType';
  /** A card is the color or colors of the mana symbols in its mana cost, regardless of the color of its frame */
  subTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** Related parts for MagicCards such as faces and tokens */
export type MagicCardRelation = {
  __typename?: 'magicCardRelation';
  /** The related MagicCard */
  card?: Maybe<MagicCardFace>;
  /** The role of the additional part */
  role: Scalars['String'];
};

/** All set information of MagicCards */
export type MagicCardSets = {
  __typename?: 'magicCardSets';
  /** The abbreviation of the set name */
  abbreviation?: Maybe<Scalars['String']>;
  /** The name of the set */
  name: Scalars['String'];
};

export type SendSmsInput = {
  mobileNumbers: Array<Maybe<MobileNumberInput>>;
};

export type AdminRoleChangedPayloadKeySpecifier = ('displayName' | 'firstName' | 'lastName' | 'personaId' | 'roleName' | AdminRoleChangedPayloadKeySpecifier)[];
export type AdminRoleChangedPayloadFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	roleName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BatchCreateResponseKeySpecifier = ('errors' | 'recurringEvents' | 'singleEvents' | BatchCreateResponseKeySpecifier)[];
export type BatchCreateResponseFieldPolicy = {
	errors?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	singleEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardQuantityKeySpecifier = ('card' | 'cardId' | 'deckSection' | 'quantity' | CardQuantityKeySpecifier)[];
export type CardQuantityFieldPolicy = {
	card?: FieldPolicy<any> | FieldReadFunction<any>,
	cardId?: FieldPolicy<any> | FieldReadFunction<any>,
	deckSection?: FieldPolicy<any> | FieldReadFunction<any>,
	quantity?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardQuantityConnectionKeySpecifier = ('deckPageInfo' | 'nodes' | CardQuantityConnectionKeySpecifier)[];
export type CardQuantityConnectionFieldPolicy = {
	deckPageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CardSetKeySpecifier = ('id' | 'name' | 'releaseDate' | CardSetKeySpecifier)[];
export type CardSetFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CertifyRoundPayloadKeySpecifier = ('event' | 'gameState' | CertifyRoundPayloadKeySpecifier)[];
export type CertifyRoundPayloadFieldPolicy = {
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	gameState?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateDeckPayloadKeySpecifier = ('deck' | CreateDeckPayloadKeySpecifier)[];
export type CreateDeckPayloadFieldPolicy = {
	deck?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeckKeySpecifier = ('cardQuantityConnection' | 'id' | 'isPrivate' | 'name' | 'owner' | DeckKeySpecifier)[];
export type DeckFieldPolicy = {
	cardQuantityConnection?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivate?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeckConnectionKeySpecifier = ('deckPageInfo' | 'node' | DeckConnectionKeySpecifier)[];
export type DeckConnectionFieldPolicy = {
	deckPageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeckOwnerKeySpecifier = ('accountId' | DeckOwnerKeySpecifier)[];
export type DeckOwnerFieldPolicy = {
	accountId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeckPageInfoKeySpecifier = ('currentPage' | 'hasNextPage' | 'totalItems' | 'totalPages' | DeckPageInfoKeySpecifier)[];
export type DeckPageInfoFieldPolicy = {
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalItems?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteDeckPayloadKeySpecifier = ('success' | DeleteDeckPayloadKeySpecifier)[];
export type DeleteDeckPayloadFieldPolicy = {
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DropKeySpecifier = ('roundNumber' | 'teamId' | DropKeySpecifier)[];
export type DropFieldPolicy = {
	roundNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventKeySpecifier = ('actualEndTime' | 'actualStartTime' | 'address' | 'capacity' | 'cardSet' | 'createdBy' | 'description' | 'emailAddress' | 'entryFee' | 'estimatedEndTime' | 'eventFormat' | 'eventTemplate' | 'format' | 'gameState' | 'groupId' | 'hasTop8' | 'id' | 'incidents' | 'interestedPlayers' | 'isAdHoc' | 'isOnline' | 'latitude' | 'limitedSet' | 'longitude' | 'numberOfPlayers' | 'organization' | 'pairingType' | 'phoneNumber' | 'playerIncidents' | 'registeredPlayers' | 'requiredTeamSize' | 'rulesEnforcementLevel' | 'scheduledStartTime' | 'shortCode' | 'startingTableNumber' | 'status' | 'tags' | 'teams' | 'timeZone' | 'title' | 'venue' | EventKeySpecifier)[];
export type EventFieldPolicy = {
	actualEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	actualStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	cardSet?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	entryFee?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	eventFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gameState?: FieldPolicy<any> | FieldReadFunction<any>,
	groupId?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTop8?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	incidents?: FieldPolicy<any> | FieldReadFunction<any>,
	interestedPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdHoc?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	limitedSet?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	pairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	playerIncidents?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredTeamSize?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesEnforcementLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	shortCode?: FieldPolicy<any> | FieldReadFunction<any>,
	startingTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	venue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventFormatKeySpecifier = ('blurb' | 'color' | 'id' | 'includesDeckbuilding' | 'includesDraft' | 'name' | 'requiresSetSelection' | 'wizardsOnly' | EventFormatKeySpecifier)[];
export type EventFormatFieldPolicy = {
	blurb?: FieldPolicy<any> | FieldReadFunction<any>,
	color?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	includesDeckbuilding?: FieldPolicy<any> | FieldReadFunction<any>,
	includesDraft?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	requiresSetSelection?: FieldPolicy<any> | FieldReadFunction<any>,
	wizardsOnly?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventPageKeySpecifier = ('events' | 'hasMoreResults' | 'pageInfo' | EventPageKeySpecifier)[];
export type EventPageFieldPolicy = {
	events?: FieldPolicy<any> | FieldReadFunction<any>,
	hasMoreResults?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventStartedPayloadKeySpecifier = ('eventCreator' | 'eventId' | 'format' | 'gamesToWin' | 'isPrivateEvent' | 'minRounds' | 'organizationId' | 'pairingType' | 'roundNumber' | 'sender' | EventStartedPayloadKeySpecifier)[];
export type EventStartedPayloadFieldPolicy = {
	eventCreator?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gamesToWin?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	minRounds?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	pairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	roundNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EventTemplateKeySpecifier = ('endDate' | 'featured' | 'fieldRules' | 'firstPublishedAt' | 'groupsAvailable' | 'hasPromoProduct' | 'id' | 'isEvergreen' | 'keyArt' | 'name' | 'prereleaseType' | 'startDate' | 'tags' | 'templateQuota' | 'templateType' | 'wpnArticle' | EventTemplateKeySpecifier)[];
export type EventTemplateFieldPolicy = {
	endDate?: FieldPolicy<any> | FieldReadFunction<any>,
	featured?: FieldPolicy<any> | FieldReadFunction<any>,
	fieldRules?: FieldPolicy<any> | FieldReadFunction<any>,
	firstPublishedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	groupsAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPromoProduct?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isEvergreen?: FieldPolicy<any> | FieldReadFunction<any>,
	keyArt?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	prereleaseType?: FieldPolicy<any> | FieldReadFunction<any>,
	startDate?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	templateQuota?: FieldPolicy<any> | FieldReadFunction<any>,
	templateType?: FieldPolicy<any> | FieldReadFunction<any>,
	wpnArticle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeedbackKeySpecifier = ('feedback' | 'orgId' | 'recommendationLevel' | 'reporterId' | FeedbackKeySpecifier)[];
export type FeedbackFieldPolicy = {
	feedback?: FieldPolicy<any> | FieldReadFunction<any>,
	orgId?: FieldPolicy<any> | FieldReadFunction<any>,
	recommendationLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	reporterId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FieldRuleOptionKeySpecifier = ('fieldName' | 'id' | 'name' | 'rule' | FieldRuleOptionKeySpecifier)[];
export type FieldRuleOptionFieldPolicy = {
	fieldName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	rule?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GameStateKeySpecifier = ('constructDraftTimerID' | 'constructedSeats' | 'constructionTimeEndTime' | 'constructionTimerExpirationTime' | 'constructionTimerStartTime' | 'currentRound' | 'currentRoundNumber' | 'draftEndTime' | 'draftTimerExpirationTime' | 'draftTimerID' | 'draftTimerStartTime' | 'drops' | 'gamesToWin' | 'id' | 'minRounds' | 'nextRoundMeta' | 'podPairingType' | 'pods' | 'rounds' | 'standings' | 'top8DraftEndTime' | 'top8DraftTimerExpirationTime' | 'top8DraftTimerID' | 'top8DraftTimerStartTime' | 'top8Pods' | GameStateKeySpecifier)[];
export type GameStateFieldPolicy = {
	constructDraftTimerID?: FieldPolicy<any> | FieldReadFunction<any>,
	constructedSeats?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionTimeEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionTimerExpirationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	constructionTimerStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	currentRound?: FieldPolicy<any> | FieldReadFunction<any>,
	currentRoundNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	draftEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	draftTimerExpirationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	draftTimerID?: FieldPolicy<any> | FieldReadFunction<any>,
	draftTimerStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	drops?: FieldPolicy<any> | FieldReadFunction<any>,
	gamesToWin?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minRounds?: FieldPolicy<any> | FieldReadFunction<any>,
	nextRoundMeta?: FieldPolicy<any> | FieldReadFunction<any>,
	podPairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	pods?: FieldPolicy<any> | FieldReadFunction<any>,
	rounds?: FieldPolicy<any> | FieldReadFunction<any>,
	standings?: FieldPolicy<any> | FieldReadFunction<any>,
	top8DraftEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	top8DraftTimerExpirationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	top8DraftTimerID?: FieldPolicy<any> | FieldReadFunction<any>,
	top8DraftTimerStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	top8Pods?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GamekeeperNotificationPayloadKeySpecifier = ('activePlayers' | 'eventCreator' | 'eventId' | 'isPrivateEvent' | 'organizationId' | 'sender' | GamekeeperNotificationPayloadKeySpecifier)[];
export type GamekeeperNotificationPayloadFieldPolicy = {
	activePlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCreator?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IncidentKeySpecifier = ('comment' | 'event' | 'id' | 'infraction' | 'offender' | 'penalty' | 'reportedAt' | 'reporter' | 'roundNumber' | 'ticketId' | IncidentKeySpecifier)[];
export type IncidentFieldPolicy = {
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	infraction?: FieldPolicy<any> | FieldReadFunction<any>,
	offender?: FieldPolicy<any> | FieldReadFunction<any>,
	penalty?: FieldPolicy<any> | FieldReadFunction<any>,
	reportedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	reporter?: FieldPolicy<any> | FieldReadFunction<any>,
	roundNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	ticketId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfractionKeySpecifier = ('category' | 'defaultPenalty' | 'id' | 'name' | InfractionKeySpecifier)[];
export type InfractionFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultPenalty?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type InfractionCategoryKeySpecifier = ('id' | 'infractions' | 'name' | 'order' | InfractionCategoryKeySpecifier)[];
export type InfractionCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	infractions?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardKeySpecifier = ('cardRelations' | 'colors' | 'convertedManaCost' | 'faces' | 'id' | 'isMultiFace' | 'latestPrinting' | 'legalities' | 'loyalty' | 'manaCost' | 'name' | 'oracleText' | 'power' | 'printing' | 'printings' | 'relationType' | 'rulings' | 'subtypes' | 'supertypes' | 'toughness' | 'types' | MagicCardKeySpecifier)[];
export type MagicCardFieldPolicy = {
	cardRelations?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	convertedManaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	faces?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isMultiFace?: FieldPolicy<any> | FieldReadFunction<any>,
	latestPrinting?: FieldPolicy<any> | FieldReadFunction<any>,
	legalities?: FieldPolicy<any> | FieldReadFunction<any>,
	loyalty?: FieldPolicy<any> | FieldReadFunction<any>,
	manaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleText?: FieldPolicy<any> | FieldReadFunction<any>,
	power?: FieldPolicy<any> | FieldReadFunction<any>,
	printing?: FieldPolicy<any> | FieldReadFunction<any>,
	printings?: FieldPolicy<any> | FieldReadFunction<any>,
	relationType?: FieldPolicy<any> | FieldReadFunction<any>,
	rulings?: FieldPolicy<any> | FieldReadFunction<any>,
	subtypes?: FieldPolicy<any> | FieldReadFunction<any>,
	supertypes?: FieldPolicy<any> | FieldReadFunction<any>,
	toughness?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardFaceKeySpecifier = ('artistCredit' | 'colors' | 'convertedManaCost' | 'flavorText' | 'fullImageUrl' | 'localizedOracleText' | 'loyalty' | 'manaCost' | 'name' | 'oracleText' | 'power' | 'subtypes' | 'supertypes' | 'thumbnailImageUrl' | 'toughness' | 'types' | MagicCardFaceKeySpecifier)[];
export type MagicCardFaceFieldPolicy = {
	artistCredit?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	convertedManaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	flavorText?: FieldPolicy<any> | FieldReadFunction<any>,
	fullImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	localizedOracleText?: FieldPolicy<any> | FieldReadFunction<any>,
	loyalty?: FieldPolicy<any> | FieldReadFunction<any>,
	manaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	oracleText?: FieldPolicy<any> | FieldReadFunction<any>,
	power?: FieldPolicy<any> | FieldReadFunction<any>,
	subtypes?: FieldPolicy<any> | FieldReadFunction<any>,
	supertypes?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	toughness?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardLegalityKeySpecifier = ('cardId' | 'format' | 'legalStatus' | MagicCardLegalityKeySpecifier)[];
export type MagicCardLegalityFieldPolicy = {
	cardId?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	legalStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardPrintingKeySpecifier = ('artistCredit' | 'collectorNumber' | 'colors' | 'convertedManaCost' | 'fullImageUrl' | 'id' | 'languageCode' | 'legalities' | 'manaCost' | 'name' | 'power' | 'printedFlavorText' | 'printedText' | 'rarity' | 'set' | 'subtypes' | 'supertypes' | 'thumbnailImageUrl' | 'toughness' | 'types' | 'watermark' | MagicCardPrintingKeySpecifier)[];
export type MagicCardPrintingFieldPolicy = {
	artistCredit?: FieldPolicy<any> | FieldReadFunction<any>,
	collectorNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	colors?: FieldPolicy<any> | FieldReadFunction<any>,
	convertedManaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	fullImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	languageCode?: FieldPolicy<any> | FieldReadFunction<any>,
	legalities?: FieldPolicy<any> | FieldReadFunction<any>,
	manaCost?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	power?: FieldPolicy<any> | FieldReadFunction<any>,
	printedFlavorText?: FieldPolicy<any> | FieldReadFunction<any>,
	printedText?: FieldPolicy<any> | FieldReadFunction<any>,
	rarity?: FieldPolicy<any> | FieldReadFunction<any>,
	set?: FieldPolicy<any> | FieldReadFunction<any>,
	subtypes?: FieldPolicy<any> | FieldReadFunction<any>,
	supertypes?: FieldPolicy<any> | FieldReadFunction<any>,
	thumbnailImageUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	toughness?: FieldPolicy<any> | FieldReadFunction<any>,
	types?: FieldPolicy<any> | FieldReadFunction<any>,
	watermark?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardPrintingSearchResultKeySpecifier = ('currentPage' | 'hasNextPage' | 'hasPreviousPage' | 'magicCardPrintings' | 'totalPages' | 'totalResults' | MagicCardPrintingSearchResultKeySpecifier)[];
export type MagicCardPrintingSearchResultFieldPolicy = {
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCardPrintings?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>,
	totalResults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardSearchResultKeySpecifier = ('currentPage' | 'hasNextPage' | 'hasPreviousPage' | 'magicCards' | 'totalPages' | 'totalResults' | MagicCardSearchResultKeySpecifier)[];
export type MagicCardSearchResultFieldPolicy = {
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCards?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>,
	totalResults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicCardSetKeySpecifier = ('abbreviation' | 'id' | 'name' | 'releaseDate' | MagicCardSetKeySpecifier)[];
export type MagicCardSetFieldPolicy = {
	abbreviation?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	releaseDate?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicFormatKeySpecifier = ('blurb' | 'id' | 'name' | MagicFormatKeySpecifier)[];
export type MagicFormatFieldPolicy = {
	blurb?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MagicRulingKeySpecifier = ('id' | 'magicCardId' | 'publicationDate' | 'text' | MagicRulingKeySpecifier)[];
export type MagicRulingFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCardId?: FieldPolicy<any> | FieldReadFunction<any>,
	publicationDate?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MatchKeySpecifier = ('cacheId' | 'id' | 'isBye' | 'isLeftTeamDropped' | 'isRightTeamDropped' | 'leftTeamWins' | 'rightTeamWins' | 'tableNumber' | 'teams' | MatchKeySpecifier)[];
export type MatchFieldPolicy = {
	cacheId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isBye?: FieldPolicy<any> | FieldReadFunction<any>,
	isLeftTeamDropped?: FieldPolicy<any> | FieldReadFunction<any>,
	isRightTeamDropped?: FieldPolicy<any> | FieldReadFunction<any>,
	leftTeamWins?: FieldPolicy<any> | FieldReadFunction<any>,
	rightTeamWins?: FieldPolicy<any> | FieldReadFunction<any>,
	tableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	teams?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MoneyKeySpecifier = ('amount' | 'currency' | MoneyKeySpecifier)[];
export type MoneyFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('acceptTermsAndConditions' | 'addGroup' | 'addRound' | 'addTeamMember' | 'addTimer' | 'approveVenue' | 'assignTableTeam' | 'batchCreateEvents' | 'broadcastSMS' | 'cancelEvent' | 'certifyRound' | 'changeRole' | 'clearPreferredTableNumber' | 'createDeck' | 'createEvent' | 'createIncident' | 'createNextRound' | 'createPrivateEvent' | 'createRecurringEvents' | 'createTeam' | 'createTeamIncident' | 'createTimer' | 'createVenue' | 'cutToTop8' | 'deleteDeck' | 'deleteIncident' | 'deleteRecurringEvents' | 'deleteTeam' | 'deleteTimer' | 'deregisterTeam' | 'dropSelf' | 'dropTeam' | 'dropTeams' | 'endEvent' | 'expeditePlayersRegistration' | 'getTeamByCode' | 'getTeams' | 'grantAdmin' | 'grantRole' | 'grantTwilioAdmin' | 'joinEvent' | 'lateRegisterCompanionPlayer' | 'lateRegisterGuestPlayer' | 'lateRegisterPlayerByEmail' | 'lockTeam' | 'recordMatchResult' | 'registerGuestPlayer' | 'registerInterestedPlayer' | 'registerPlayerByEmail' | 'registerTeam' | 'removeGroup' | 'removeRegisteredPlayer' | 'removeRound' | 'removeTeamMember' | 'revokeAdmin' | 'revokeRole' | 'revokeTwilioAdmin' | 'sendFeedback' | 'sendSMS' | 'setPodPairingType' | 'setPreferredTableNumber' | 'setRegisteredPlayerName' | 'setTimer' | 'startDeckConstructionTimer' | 'startDraftTimer' | 'startEvent' | 'startRoundTimer' | 'undropTeam' | 'unlockTeam' | 'updateDeck' | 'updateEvent' | 'updateIncident' | 'updateRecurringEvents' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	acceptTermsAndConditions?: FieldPolicy<any> | FieldReadFunction<any>,
	addGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	addRound?: FieldPolicy<any> | FieldReadFunction<any>,
	addTeamMember?: FieldPolicy<any> | FieldReadFunction<any>,
	addTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	approveVenue?: FieldPolicy<any> | FieldReadFunction<any>,
	assignTableTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	batchCreateEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	broadcastSMS?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	certifyRound?: FieldPolicy<any> | FieldReadFunction<any>,
	changeRole?: FieldPolicy<any> | FieldReadFunction<any>,
	clearPreferredTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	createDeck?: FieldPolicy<any> | FieldReadFunction<any>,
	createEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	createIncident?: FieldPolicy<any> | FieldReadFunction<any>,
	createNextRound?: FieldPolicy<any> | FieldReadFunction<any>,
	createPrivateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	createRecurringEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	createTeamIncident?: FieldPolicy<any> | FieldReadFunction<any>,
	createTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	createVenue?: FieldPolicy<any> | FieldReadFunction<any>,
	cutToTop8?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDeck?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteIncident?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRecurringEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	deregisterTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	dropSelf?: FieldPolicy<any> | FieldReadFunction<any>,
	dropTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	dropTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	endEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	expeditePlayersRegistration?: FieldPolicy<any> | FieldReadFunction<any>,
	getTeamByCode?: FieldPolicy<any> | FieldReadFunction<any>,
	getTeams?: FieldPolicy<any> | FieldReadFunction<any>,
	grantAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	grantRole?: FieldPolicy<any> | FieldReadFunction<any>,
	grantTwilioAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	joinEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	lateRegisterCompanionPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	lateRegisterGuestPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	lateRegisterPlayerByEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	lockTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	recordMatchResult?: FieldPolicy<any> | FieldReadFunction<any>,
	registerGuestPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	registerInterestedPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	registerPlayerByEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	registerTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	removeGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	removeRegisteredPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	removeRound?: FieldPolicy<any> | FieldReadFunction<any>,
	removeTeamMember?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeRole?: FieldPolicy<any> | FieldReadFunction<any>,
	revokeTwilioAdmin?: FieldPolicy<any> | FieldReadFunction<any>,
	sendFeedback?: FieldPolicy<any> | FieldReadFunction<any>,
	sendSMS?: FieldPolicy<any> | FieldReadFunction<any>,
	setPodPairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	setPreferredTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	setRegisteredPlayerName?: FieldPolicy<any> | FieldReadFunction<any>,
	setTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	startDeckConstructionTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	startDraftTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	startEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	startRoundTimer?: FieldPolicy<any> | FieldReadFunction<any>,
	undropTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	unlockTeam?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDeck?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIncident?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRecurringEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationKeySpecifier = ('acceptedTermsAndConditionsAt' | 'availableTemplates' | 'emailAddress' | 'groups' | 'id' | 'isPremium' | 'latitude' | 'longitude' | 'name' | 'phoneNumber' | 'postalAddress' | 'roles' | 'templateUsages' | 'venues' | 'website' | OrganizationKeySpecifier)[];
export type OrganizationFieldPolicy = {
	acceptedTermsAndConditionsAt?: FieldPolicy<any> | FieldReadFunction<any>,
	availableTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPremium?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	postalAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	templateUsages?: FieldPolicy<any> | FieldReadFunction<any>,
	venues?: FieldPolicy<any> | FieldReadFunction<any>,
	website?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationGroupKeySpecifier = ('id' | 'name' | 'onlineOnly' | OrganizationGroupKeySpecifier)[];
export type OrganizationGroupFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	onlineOnly?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OrganizationGroupOptionKeySpecifier = ('id' | 'name' | OrganizationGroupOptionKeySpecifier)[];
export type OrganizationGroupOptionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OwnedDeckConnectionKeySpecifier = ('deckPageInfo' | 'nodes' | OwnedDeckConnectionKeySpecifier)[];
export type OwnedDeckConnectionFieldPolicy = {
	deckPageInfo?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('page' | 'pageSize' | 'totalResults' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageSize?: FieldPolicy<any> | FieldReadFunction<any>,
	totalResults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PenaltyKeySpecifier = ('id' | 'name' | 'order' | PenaltyKeySpecifier)[];
export type PenaltyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerDroppedPayloadKeySpecifier = ('droppedPlayer' | 'eventCreator' | 'eventId' | 'isPrivateEvent' | 'isReservation' | 'sender' | PlayerDroppedPayloadKeySpecifier)[];
export type PlayerDroppedPayloadFieldPolicy = {
	droppedPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCreator?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	isReservation?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PlayerRegisteredPayloadKeySpecifier = ('addedPlayer' | 'eventCreator' | 'eventId' | 'isPrivateEvent' | 'sender' | PlayerRegisteredPayloadKeySpecifier)[];
export type PlayerRegisteredPayloadFieldPolicy = {
	addedPlayer?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCreator?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivateEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PodKeySpecifier = ('number' | 'seats' | PodKeySpecifier)[];
export type PodFieldPolicy = {
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	seats?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PrivateEventKeySpecifier = ('description' | 'format' | 'gamesToWin' | 'id' | 'pairingType' | 'shortCode' | 'title' | PrivateEventKeySpecifier)[];
export type PrivateEventFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	gamesToWin?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	shortCode?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('admins' | 'autoCard' | 'cardSets' | 'deck' | 'event' | 'eventFormats' | 'eventPage' | 'eventTemplates' | 'eventsInProgress' | 'incident' | 'infractionCategories' | 'infractions' | 'magicCard' | 'magicCardOracleSubTypes' | 'magicCardPrintings' | 'magicCardSets' | 'magicCards' | 'me' | 'myActiveEvents' | 'now' | 'organization' | 'organizations' | 'ownedDecks' | 'penalties' | 'randomCard' | 'recurrenceEvent' | 'timer' | 'twilioAdmins' | 'user' | 'venue' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	admins?: FieldPolicy<any> | FieldReadFunction<any>,
	autoCard?: FieldPolicy<any> | FieldReadFunction<any>,
	cardSets?: FieldPolicy<any> | FieldReadFunction<any>,
	deck?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	eventFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	eventPage?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	eventsInProgress?: FieldPolicy<any> | FieldReadFunction<any>,
	incident?: FieldPolicy<any> | FieldReadFunction<any>,
	infractionCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	infractions?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCard?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCardOracleSubTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCardPrintings?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCardSets?: FieldPolicy<any> | FieldReadFunction<any>,
	magicCards?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>,
	myActiveEvents?: FieldPolicy<any> | FieldReadFunction<any>,
	now?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	organizations?: FieldPolicy<any> | FieldReadFunction<any>,
	ownedDecks?: FieldPolicy<any> | FieldReadFunction<any>,
	penalties?: FieldPolicy<any> | FieldReadFunction<any>,
	randomCard?: FieldPolicy<any> | FieldReadFunction<any>,
	recurrenceEvent?: FieldPolicy<any> | FieldReadFunction<any>,
	timer?: FieldPolicy<any> | FieldReadFunction<any>,
	twilioAdmins?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	venue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecurrenceEventKeySpecifier = ('actualEndTime' | 'actualStartTime' | 'address' | 'capacity' | 'createdBy' | 'description' | 'dotWMask' | 'emailAddress' | 'entryFee' | 'estimatedEndTime' | 'eventTemplate' | 'format' | 'frequency' | 'groupId' | 'hasTop8' | 'id' | 'isAdHoc' | 'isDotWBound' | 'isOnline' | 'latitude' | 'limitedSet' | 'longitude' | 'numberOfPlayers' | 'organization' | 'pairingType' | 'phoneNumber' | 'repeatUntil' | 'requiredTeamSize' | 'rulesEnforcementLevel' | 'scheduledStartTime' | 'shortCode' | 'startingTableNumber' | 'status' | 'tags' | 'timeZone' | 'title' | 'venue' | RecurrenceEventKeySpecifier)[];
export type RecurrenceEventFieldPolicy = {
	actualEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	actualStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	createdBy?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	dotWMask?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	entryFee?: FieldPolicy<any> | FieldReadFunction<any>,
	estimatedEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	eventTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	frequency?: FieldPolicy<any> | FieldReadFunction<any>,
	groupId?: FieldPolicy<any> | FieldReadFunction<any>,
	hasTop8?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isAdHoc?: FieldPolicy<any> | FieldReadFunction<any>,
	isDotWBound?: FieldPolicy<any> | FieldReadFunction<any>,
	isOnline?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	limitedSet?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	numberOfPlayers?: FieldPolicy<any> | FieldReadFunction<any>,
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	pairingType?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	repeatUntil?: FieldPolicy<any> | FieldReadFunction<any>,
	requiredTeamSize?: FieldPolicy<any> | FieldReadFunction<any>,
	rulesEnforcementLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduledStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	shortCode?: FieldPolicy<any> | FieldReadFunction<any>,
	startingTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	venue?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecurringEventResponseKeySpecifier = ('eventMaxCountHit' | 'eventMaxDateHit' | 'recurringEvents' | RecurringEventResponseKeySpecifier)[];
export type RecurringEventResponseFieldPolicy = {
	eventMaxCountHit?: FieldPolicy<any> | FieldReadFunction<any>,
	eventMaxDateHit?: FieldPolicy<any> | FieldReadFunction<any>,
	recurringEvents?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationKeySpecifier = ('displayName' | 'emailAddress' | 'firstName' | 'id' | 'incidents' | 'lastName' | 'personaId' | 'preferredTableNumber' | 'status' | RegistrationKeySpecifier)[];
export type RegistrationFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	incidents?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationPayloadKeySpecifier = ('registration' | RegistrationPayloadKeySpecifier)[];
export type RegistrationPayloadFieldPolicy = {
	registration?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegistrationUpdatedPayloadKeySpecifier = ('displayName' | 'eventId' | 'firstName' | 'lastName' | 'personaId' | 'preferredTableNumber' | 'registrationId' | 'status' | RegistrationUpdatedPayloadKeySpecifier)[];
export type RegistrationUpdatedPayloadFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	preferredTableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationId?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReservationNotificationPayloadKeySpecifier = ('displayName' | 'emailAddress' | 'eventId' | 'firstName' | 'lastName' | 'personaId' | 'reservationId' | ReservationNotificationPayloadKeySpecifier)[];
export type ReservationNotificationPayloadFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	reservationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RespKeySpecifier = ('deliveryStatus' | 'isDelivered' | 'mobileNumber' | RespKeySpecifier)[];
export type RespFieldPolicy = {
	deliveryStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	isDelivered?: FieldPolicy<any> | FieldReadFunction<any>,
	mobileNumber?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('organization' | 'roleName' | 'user' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	organization?: FieldPolicy<any> | FieldReadFunction<any>,
	roleName?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleChangedPayloadKeySpecifier = ('displayName' | 'firstName' | 'lastName' | 'organizationId' | 'personaId' | 'roleName' | RoleChangedPayloadKeySpecifier)[];
export type RoleChangedPayloadFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	roleName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoundKeySpecifier = ('actualEndTime' | 'actualStartTime' | 'canRollback' | 'id' | 'isCertified' | 'isFinalRound' | 'isPlayoff' | 'matches' | 'number' | 'pairingStrategy' | 'roundTimerExpirationTime' | 'timerID' | RoundKeySpecifier)[];
export type RoundFieldPolicy = {
	actualEndTime?: FieldPolicy<any> | FieldReadFunction<any>,
	actualStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	canRollback?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isCertified?: FieldPolicy<any> | FieldReadFunction<any>,
	isFinalRound?: FieldPolicy<any> | FieldReadFunction<any>,
	isPlayoff?: FieldPolicy<any> | FieldReadFunction<any>,
	matches?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	pairingStrategy?: FieldPolicy<any> | FieldReadFunction<any>,
	roundTimerExpirationTime?: FieldPolicy<any> | FieldReadFunction<any>,
	timerID?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoundMetadataKeySpecifier = ('hasDeckConstruction' | 'hasDraft' | RoundMetadataKeySpecifier)[];
export type RoundMetadataFieldPolicy = {
	hasDeckConstruction?: FieldPolicy<any> | FieldReadFunction<any>,
	hasDraft?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RuleKeySpecifier = ('rule' | 'value' | RuleKeySpecifier)[];
export type RuleFieldPolicy = {
	rule?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SearchResultKeySpecifier = ('currentPage' | 'hasNextPage' | 'hasPreviousPage' | 'totalPages' | 'totalResults' | SearchResultKeySpecifier)[];
export type SearchResultFieldPolicy = {
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	totalPages?: FieldPolicy<any> | FieldReadFunction<any>,
	totalResults?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SeatKeySpecifier = ('displayName' | 'emailAddress' | 'firstName' | 'lastName' | 'number' | 'personaId' | 'team' | SeatKeySpecifier)[];
export type SeatFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendSMSStatusKeySpecifier = ('failureCount' | 'resp' | 'successCount' | SendSMSStatusKeySpecifier)[];
export type SendSMSStatusFieldPolicy = {
	failureCount?: FieldPolicy<any> | FieldReadFunction<any>,
	resp?: FieldPolicy<any> | FieldReadFunction<any>,
	successCount?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('adminRoleGranted' | 'adminRoleRevoked' | 'eventCreated' | 'eventReservationCancelled' | 'eventReserved' | 'eventStarted' | 'eventUpdated' | 'gameResultReported' | 'gameRoundCertified' | 'gameRoundCreated' | 'playerRegistered' | 'registrationUpdated' | 'roleGranted' | 'roleRevoked' | 'runningEventUpdated' | 'teamCreated' | 'teamDeleted' | 'teamDropped' | 'teamUpdated' | 'timerUpdated' | 'venueCreated' | 'venueRoleGranted' | 'venueRoleRevoked' | 'venueUpdated' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	adminRoleGranted?: FieldPolicy<any> | FieldReadFunction<any>,
	adminRoleRevoked?: FieldPolicy<any> | FieldReadFunction<any>,
	eventCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	eventReservationCancelled?: FieldPolicy<any> | FieldReadFunction<any>,
	eventReserved?: FieldPolicy<any> | FieldReadFunction<any>,
	eventStarted?: FieldPolicy<any> | FieldReadFunction<any>,
	eventUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	gameResultReported?: FieldPolicy<any> | FieldReadFunction<any>,
	gameRoundCertified?: FieldPolicy<any> | FieldReadFunction<any>,
	gameRoundCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	playerRegistered?: FieldPolicy<any> | FieldReadFunction<any>,
	registrationUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	roleGranted?: FieldPolicy<any> | FieldReadFunction<any>,
	roleRevoked?: FieldPolicy<any> | FieldReadFunction<any>,
	runningEventUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	teamCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDeleted?: FieldPolicy<any> | FieldReadFunction<any>,
	teamDropped?: FieldPolicy<any> | FieldReadFunction<any>,
	teamUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	timerUpdated?: FieldPolicy<any> | FieldReadFunction<any>,
	venueCreated?: FieldPolicy<any> | FieldReadFunction<any>,
	venueRoleGranted?: FieldPolicy<any> | FieldReadFunction<any>,
	venueRoleRevoked?: FieldPolicy<any> | FieldReadFunction<any>,
	venueUpdated?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagsKeySpecifier = ('tags' | TagsKeySpecifier)[];
export type TagsFieldPolicy = {
	tags?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamKeySpecifier = ('cacheId' | 'id' | 'name' | 'players' | 'results' | TeamKeySpecifier)[];
export type TeamFieldPolicy = {
	cacheId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	players?: FieldPolicy<any> | FieldReadFunction<any>,
	results?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamPayloadKeySpecifier = ('eventId' | 'id' | 'isLocked' | 'isRegistered' | 'registrations' | 'reservations' | 'tableNumber' | 'teamCode' | TeamPayloadKeySpecifier)[];
export type TeamPayloadFieldPolicy = {
	eventId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isLocked?: FieldPolicy<any> | FieldReadFunction<any>,
	isRegistered?: FieldPolicy<any> | FieldReadFunction<any>,
	registrations?: FieldPolicy<any> | FieldReadFunction<any>,
	reservations?: FieldPolicy<any> | FieldReadFunction<any>,
	tableNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	teamCode?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamResultKeySpecifier = ('draws' | 'isBye' | 'isFinal' | 'isPlayoffResult' | 'isTO' | 'losses' | 'submitter' | 'teamId' | 'wins' | TeamResultKeySpecifier)[];
export type TeamResultFieldPolicy = {
	draws?: FieldPolicy<any> | FieldReadFunction<any>,
	isBye?: FieldPolicy<any> | FieldReadFunction<any>,
	isFinal?: FieldPolicy<any> | FieldReadFunction<any>,
	isPlayoffResult?: FieldPolicy<any> | FieldReadFunction<any>,
	isTO?: FieldPolicy<any> | FieldReadFunction<any>,
	losses?: FieldPolicy<any> | FieldReadFunction<any>,
	submitter?: FieldPolicy<any> | FieldReadFunction<any>,
	teamId?: FieldPolicy<any> | FieldReadFunction<any>,
	wins?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TeamStandingKeySpecifier = ('byes' | 'draws' | 'gameWinPercent' | 'losses' | 'matchPoints' | 'opponentGameWinPercent' | 'opponentMatchWinPercent' | 'rank' | 'team' | 'wins' | TeamStandingKeySpecifier)[];
export type TeamStandingFieldPolicy = {
	byes?: FieldPolicy<any> | FieldReadFunction<any>,
	draws?: FieldPolicy<any> | FieldReadFunction<any>,
	gameWinPercent?: FieldPolicy<any> | FieldReadFunction<any>,
	losses?: FieldPolicy<any> | FieldReadFunction<any>,
	matchPoints?: FieldPolicy<any> | FieldReadFunction<any>,
	opponentGameWinPercent?: FieldPolicy<any> | FieldReadFunction<any>,
	opponentMatchWinPercent?: FieldPolicy<any> | FieldReadFunction<any>,
	rank?: FieldPolicy<any> | FieldReadFunction<any>,
	team?: FieldPolicy<any> | FieldReadFunction<any>,
	wins?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TemplateUsageKeySpecifier = ('count' | 'templateId' | TemplateUsageKeySpecifier)[];
export type TemplateUsageFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	templateId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TimerKeySpecifier = ('durationMs' | 'durationStartTime' | 'id' | 'serverTime' | 'state' | TimerKeySpecifier)[];
export type TimerFieldPolicy = {
	durationMs?: FieldPolicy<any> | FieldReadFunction<any>,
	durationStartTime?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	serverTime?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateDeckPayloadKeySpecifier = ('deck' | UpdateDeckPayloadKeySpecifier)[];
export type UpdateDeckPayloadFieldPolicy = {
	deck?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('displayName' | 'emailAddress' | 'firstName' | 'isEmailVerified' | 'lastName' | 'personaId' | 'roles' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	isEmailVerified?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	personaId?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VenueKeySpecifier = ('address' | 'capacity' | 'city' | 'country' | 'emailAddress' | 'googlePlaceId' | 'id' | 'isApproved' | 'latitude' | 'longitude' | 'name' | 'notes' | 'phoneNumber' | 'postalCode' | 'state' | 'streetAddress' | 'timeZone' | VenueKeySpecifier)[];
export type VenueFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	googlePlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isApproved?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type VenueUpdatePayloadKeySpecifier = ('address' | 'capacity' | 'city' | 'country' | 'emailAddress' | 'googlePlaceId' | 'id' | 'isApproved' | 'latitude' | 'longitude' | 'name' | 'notes' | 'organizationId' | 'phoneNumber' | 'postalCode' | 'state' | 'streetAddress' | 'timeZone' | VenueUpdatePayloadKeySpecifier)[];
export type VenueUpdatePayloadFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	capacity?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	emailAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	googlePlaceId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isApproved?: FieldPolicy<any> | FieldReadFunction<any>,
	latitude?: FieldPolicy<any> | FieldReadFunction<any>,
	longitude?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	organizationId?: FieldPolicy<any> | FieldReadFunction<any>,
	phoneNumber?: FieldPolicy<any> | FieldReadFunction<any>,
	postalCode?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	streetAddress?: FieldPolicy<any> | FieldReadFunction<any>,
	timeZone?: FieldPolicy<any> | FieldReadFunction<any>
};
export type magicCardOracleSubTypeKeySpecifier = ('subTypes' | magicCardOracleSubTypeKeySpecifier)[];
export type magicCardOracleSubTypeFieldPolicy = {
	subTypes?: FieldPolicy<any> | FieldReadFunction<any>
};
export type magicCardRelationKeySpecifier = ('card' | 'role' | magicCardRelationKeySpecifier)[];
export type magicCardRelationFieldPolicy = {
	card?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>
};
export type magicCardSetsKeySpecifier = ('abbreviation' | 'name' | magicCardSetsKeySpecifier)[];
export type magicCardSetsFieldPolicy = {
	abbreviation?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	AdminRoleChangedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AdminRoleChangedPayloadKeySpecifier | (() => undefined | AdminRoleChangedPayloadKeySpecifier),
		fields?: AdminRoleChangedPayloadFieldPolicy,
	},
	BatchCreateResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BatchCreateResponseKeySpecifier | (() => undefined | BatchCreateResponseKeySpecifier),
		fields?: BatchCreateResponseFieldPolicy,
	},
	CardQuantity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardQuantityKeySpecifier | (() => undefined | CardQuantityKeySpecifier),
		fields?: CardQuantityFieldPolicy,
	},
	CardQuantityConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardQuantityConnectionKeySpecifier | (() => undefined | CardQuantityConnectionKeySpecifier),
		fields?: CardQuantityConnectionFieldPolicy,
	},
	CardSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CardSetKeySpecifier | (() => undefined | CardSetKeySpecifier),
		fields?: CardSetFieldPolicy,
	},
	CertifyRoundPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CertifyRoundPayloadKeySpecifier | (() => undefined | CertifyRoundPayloadKeySpecifier),
		fields?: CertifyRoundPayloadFieldPolicy,
	},
	CreateDeckPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateDeckPayloadKeySpecifier | (() => undefined | CreateDeckPayloadKeySpecifier),
		fields?: CreateDeckPayloadFieldPolicy,
	},
	Deck?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeckKeySpecifier | (() => undefined | DeckKeySpecifier),
		fields?: DeckFieldPolicy,
	},
	DeckConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeckConnectionKeySpecifier | (() => undefined | DeckConnectionKeySpecifier),
		fields?: DeckConnectionFieldPolicy,
	},
	DeckOwner?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeckOwnerKeySpecifier | (() => undefined | DeckOwnerKeySpecifier),
		fields?: DeckOwnerFieldPolicy,
	},
	DeckPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeckPageInfoKeySpecifier | (() => undefined | DeckPageInfoKeySpecifier),
		fields?: DeckPageInfoFieldPolicy,
	},
	DeleteDeckPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteDeckPayloadKeySpecifier | (() => undefined | DeleteDeckPayloadKeySpecifier),
		fields?: DeleteDeckPayloadFieldPolicy,
	},
	Drop?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DropKeySpecifier | (() => undefined | DropKeySpecifier),
		fields?: DropFieldPolicy,
	},
	Event?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventKeySpecifier | (() => undefined | EventKeySpecifier),
		fields?: EventFieldPolicy,
	},
	EventFormat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventFormatKeySpecifier | (() => undefined | EventFormatKeySpecifier),
		fields?: EventFormatFieldPolicy,
	},
	EventPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventPageKeySpecifier | (() => undefined | EventPageKeySpecifier),
		fields?: EventPageFieldPolicy,
	},
	EventStartedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventStartedPayloadKeySpecifier | (() => undefined | EventStartedPayloadKeySpecifier),
		fields?: EventStartedPayloadFieldPolicy,
	},
	EventTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EventTemplateKeySpecifier | (() => undefined | EventTemplateKeySpecifier),
		fields?: EventTemplateFieldPolicy,
	},
	Feedback?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeedbackKeySpecifier | (() => undefined | FeedbackKeySpecifier),
		fields?: FeedbackFieldPolicy,
	},
	FieldRuleOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FieldRuleOptionKeySpecifier | (() => undefined | FieldRuleOptionKeySpecifier),
		fields?: FieldRuleOptionFieldPolicy,
	},
	GameState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GameStateKeySpecifier | (() => undefined | GameStateKeySpecifier),
		fields?: GameStateFieldPolicy,
	},
	GamekeeperNotificationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GamekeeperNotificationPayloadKeySpecifier | (() => undefined | GamekeeperNotificationPayloadKeySpecifier),
		fields?: GamekeeperNotificationPayloadFieldPolicy,
	},
	Incident?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IncidentKeySpecifier | (() => undefined | IncidentKeySpecifier),
		fields?: IncidentFieldPolicy,
	},
	Infraction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfractionKeySpecifier | (() => undefined | InfractionKeySpecifier),
		fields?: InfractionFieldPolicy,
	},
	InfractionCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | InfractionCategoryKeySpecifier | (() => undefined | InfractionCategoryKeySpecifier),
		fields?: InfractionCategoryFieldPolicy,
	},
	MagicCard?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardKeySpecifier | (() => undefined | MagicCardKeySpecifier),
		fields?: MagicCardFieldPolicy,
	},
	MagicCardFace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardFaceKeySpecifier | (() => undefined | MagicCardFaceKeySpecifier),
		fields?: MagicCardFaceFieldPolicy,
	},
	MagicCardLegality?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardLegalityKeySpecifier | (() => undefined | MagicCardLegalityKeySpecifier),
		fields?: MagicCardLegalityFieldPolicy,
	},
	MagicCardPrinting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardPrintingKeySpecifier | (() => undefined | MagicCardPrintingKeySpecifier),
		fields?: MagicCardPrintingFieldPolicy,
	},
	MagicCardPrintingSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardPrintingSearchResultKeySpecifier | (() => undefined | MagicCardPrintingSearchResultKeySpecifier),
		fields?: MagicCardPrintingSearchResultFieldPolicy,
	},
	MagicCardSearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardSearchResultKeySpecifier | (() => undefined | MagicCardSearchResultKeySpecifier),
		fields?: MagicCardSearchResultFieldPolicy,
	},
	MagicCardSet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicCardSetKeySpecifier | (() => undefined | MagicCardSetKeySpecifier),
		fields?: MagicCardSetFieldPolicy,
	},
	MagicFormat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicFormatKeySpecifier | (() => undefined | MagicFormatKeySpecifier),
		fields?: MagicFormatFieldPolicy,
	},
	MagicRuling?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MagicRulingKeySpecifier | (() => undefined | MagicRulingKeySpecifier),
		fields?: MagicRulingFieldPolicy,
	},
	Match?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MatchKeySpecifier | (() => undefined | MatchKeySpecifier),
		fields?: MatchFieldPolicy,
	},
	Money?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MoneyKeySpecifier | (() => undefined | MoneyKeySpecifier),
		fields?: MoneyFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Organization?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationKeySpecifier | (() => undefined | OrganizationKeySpecifier),
		fields?: OrganizationFieldPolicy,
	},
	OrganizationGroup?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationGroupKeySpecifier | (() => undefined | OrganizationGroupKeySpecifier),
		fields?: OrganizationGroupFieldPolicy,
	},
	OrganizationGroupOption?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OrganizationGroupOptionKeySpecifier | (() => undefined | OrganizationGroupOptionKeySpecifier),
		fields?: OrganizationGroupOptionFieldPolicy,
	},
	OwnedDeckConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OwnedDeckConnectionKeySpecifier | (() => undefined | OwnedDeckConnectionKeySpecifier),
		fields?: OwnedDeckConnectionFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	Penalty?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PenaltyKeySpecifier | (() => undefined | PenaltyKeySpecifier),
		fields?: PenaltyFieldPolicy,
	},
	PlayerDroppedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerDroppedPayloadKeySpecifier | (() => undefined | PlayerDroppedPayloadKeySpecifier),
		fields?: PlayerDroppedPayloadFieldPolicy,
	},
	PlayerRegisteredPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PlayerRegisteredPayloadKeySpecifier | (() => undefined | PlayerRegisteredPayloadKeySpecifier),
		fields?: PlayerRegisteredPayloadFieldPolicy,
	},
	Pod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PodKeySpecifier | (() => undefined | PodKeySpecifier),
		fields?: PodFieldPolicy,
	},
	PrivateEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PrivateEventKeySpecifier | (() => undefined | PrivateEventKeySpecifier),
		fields?: PrivateEventFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RecurrenceEvent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecurrenceEventKeySpecifier | (() => undefined | RecurrenceEventKeySpecifier),
		fields?: RecurrenceEventFieldPolicy,
	},
	RecurringEventResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecurringEventResponseKeySpecifier | (() => undefined | RecurringEventResponseKeySpecifier),
		fields?: RecurringEventResponseFieldPolicy,
	},
	Registration?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationKeySpecifier | (() => undefined | RegistrationKeySpecifier),
		fields?: RegistrationFieldPolicy,
	},
	RegistrationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationPayloadKeySpecifier | (() => undefined | RegistrationPayloadKeySpecifier),
		fields?: RegistrationPayloadFieldPolicy,
	},
	RegistrationUpdatedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegistrationUpdatedPayloadKeySpecifier | (() => undefined | RegistrationUpdatedPayloadKeySpecifier),
		fields?: RegistrationUpdatedPayloadFieldPolicy,
	},
	ReservationNotificationPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReservationNotificationPayloadKeySpecifier | (() => undefined | ReservationNotificationPayloadKeySpecifier),
		fields?: ReservationNotificationPayloadFieldPolicy,
	},
	Resp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RespKeySpecifier | (() => undefined | RespKeySpecifier),
		fields?: RespFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	RoleChangedPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleChangedPayloadKeySpecifier | (() => undefined | RoleChangedPayloadKeySpecifier),
		fields?: RoleChangedPayloadFieldPolicy,
	},
	Round?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoundKeySpecifier | (() => undefined | RoundKeySpecifier),
		fields?: RoundFieldPolicy,
	},
	RoundMetadata?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoundMetadataKeySpecifier | (() => undefined | RoundMetadataKeySpecifier),
		fields?: RoundMetadataFieldPolicy,
	},
	Rule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RuleKeySpecifier | (() => undefined | RuleKeySpecifier),
		fields?: RuleFieldPolicy,
	},
	SearchResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SearchResultKeySpecifier | (() => undefined | SearchResultKeySpecifier),
		fields?: SearchResultFieldPolicy,
	},
	Seat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SeatKeySpecifier | (() => undefined | SeatKeySpecifier),
		fields?: SeatFieldPolicy,
	},
	SendSMSStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendSMSStatusKeySpecifier | (() => undefined | SendSMSStatusKeySpecifier),
		fields?: SendSMSStatusFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Tags?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagsKeySpecifier | (() => undefined | TagsKeySpecifier),
		fields?: TagsFieldPolicy,
	},
	Team?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamKeySpecifier | (() => undefined | TeamKeySpecifier),
		fields?: TeamFieldPolicy,
	},
	TeamPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamPayloadKeySpecifier | (() => undefined | TeamPayloadKeySpecifier),
		fields?: TeamPayloadFieldPolicy,
	},
	TeamResult?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamResultKeySpecifier | (() => undefined | TeamResultKeySpecifier),
		fields?: TeamResultFieldPolicy,
	},
	TeamStanding?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TeamStandingKeySpecifier | (() => undefined | TeamStandingKeySpecifier),
		fields?: TeamStandingFieldPolicy,
	},
	TemplateUsage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TemplateUsageKeySpecifier | (() => undefined | TemplateUsageKeySpecifier),
		fields?: TemplateUsageFieldPolicy,
	},
	Timer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TimerKeySpecifier | (() => undefined | TimerKeySpecifier),
		fields?: TimerFieldPolicy,
	},
	UpdateDeckPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateDeckPayloadKeySpecifier | (() => undefined | UpdateDeckPayloadKeySpecifier),
		fields?: UpdateDeckPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	Venue?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VenueKeySpecifier | (() => undefined | VenueKeySpecifier),
		fields?: VenueFieldPolicy,
	},
	VenueUpdatePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | VenueUpdatePayloadKeySpecifier | (() => undefined | VenueUpdatePayloadKeySpecifier),
		fields?: VenueUpdatePayloadFieldPolicy,
	},
	magicCardOracleSubType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | magicCardOracleSubTypeKeySpecifier | (() => undefined | magicCardOracleSubTypeKeySpecifier),
		fields?: magicCardOracleSubTypeFieldPolicy,
	},
	magicCardRelation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | magicCardRelationKeySpecifier | (() => undefined | magicCardRelationKeySpecifier),
		fields?: magicCardRelationFieldPolicy,
	},
	magicCardSets?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | magicCardSetsKeySpecifier | (() => undefined | magicCardSetsKeySpecifier),
		fields?: magicCardSetsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;