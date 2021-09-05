> `spirit-link` - W  
> Enchantment - Aura  
> Enchant `package.json`  
> Whenever enchanted project sends bits to EventLink, its controller regains that much time.

# spirit-link - A library for interacting with EventLink more easily

This abstracts away the majority of the GraphQL and authorization steps to interact with EventLink, and
provides many helper functions for common actions you may want to perform in a way that keeps you from
writing any GraphQL yourself. Of course, if you _want_ to do that, you certainly still can - but this
should make your life a lot easier when dealing with keeping the auth up to date.

## Installation

`@apollo/client` is required as a peer dependency, so you probably want to run:

```shell
npm install spirit-link @apollo/client
```

This should work in the browser as well as in a NodeJS backend, although currently the browser remains
untested.

## Usage

```typescript
import {EventlinkClient} from 'spirit-link';

// Get the email address and password for a user (probably a scorekeeper)

const eventlink = new EventlinkClient();
await eventlink.login(emailAddress, password);

// Use built-in functions to avoid GraphQL
const me = await eventlink.getMe();
console.log(`Hello ${me.firstName} ${me.lastName}!`);

// Or write your own GraphQL!
import {Query} from 'spirit-link';
const result = await eventlink.client.query<Query>({
  query: gql`query MyInfo {
          me {
              firstName
              lastName
          }
      }`
});
const meToo = result.data.me;
console.log(`Hello ${meToo.firstName} ${meToo.lastName}!`);
```

Queries, Mutations, and Subscriptions (via WebSocket) are all supported.

For full details on what the  EventLink GraphQL API provides, check out the `eventlink.gql` file included
in the package; note that this could very easily get out of date quickly, but it does represent the API as
it existed when the library was last updated.
