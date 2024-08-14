'use client'
import { ApolloClient, ApolloLink, from, HttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from "@apollo/client/link/error";

console.log('cord', process.env.NEXT_PUBLIC_BACKEND_URL)
const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL, // Replace with your GraphQL endpoint
  headers: {
    authorization: localStorage.getItem('token') || '',
  }
});

const wsLink = new GraphQLWsLink(createClient({
  url: process.env.NEXT_PUBLIC_BACKEND_WS_URL || '',
  connectionParams: {
    authToken: localStorage.getItem('token') || '',
  }
}));

// const authLink = setContext((_, { headers }) => {
//   // Get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token');
//   // Return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `${token}` : '',
//     },
//   };
// });

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}, Code: ${extensions.code}`
      )
      if (extensions.code === 401) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
      }
    }
    );
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  from([errorLink, httpLink])
);



const client = new ApolloClient({
  link: typeof window === "undefined"
    ? ApolloLink.from([
      new SSRMultipartLink({
        stripDefer: true,
      }),
      httpLink,
    ])
    : splitLink,
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   link: typeof window === "undefined"
//     ? ApolloLink.from([
//       new SSRMultipartLink({
//         stripDefer: true,
//       }),
//       httpLink,
//     ])
//     : authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

export default client;
