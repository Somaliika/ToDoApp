// import ApolloClient from 'apollo-boost';
//
// const Client = new ApolloClient({
//   uri: 'https://todo-mongo-graphql-server.herokuapp.com'
// });
// export default Client;

import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from 'apollo-client';

const Client = new ApolloClient({
  link: createHttpLink({ uri: "https://todo-mongo-graphql-server.herokuapp.com" }),
  cache: new InMemoryCache(),
});
export default Client;

// import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
// import { ApolloClient } from 'apollo-client';
// import { HttpLink } from 'apollo-link-http';
//
// // typedefs and resolvers
// import StateResolvers from './resolvers';
// import typeDefs from './typeDefs';
//
// export default function createClient(): ApolloClient<NormalizedCacheObject> {
//   const cache = new InMemoryCache();
//
//   // create http link
//   const httpLink = new HttpLink({
//     uri: 'https://todo-mongo-graphql-server.herokuapp.com'
//   });
//
//   // Helper function to get data from the cache
//   const getState = (query: any): IState => {
//     return cache.readQuery<IRoot>({ query }).state;
//   };
//
//   // Helper function to write data back to the cache
//   const writeState = (state: IState) => {
//     return cache.writeData({ data: { state } });
//   };
//
//   // initial apollo local state
//   const initState = () => {
//     const state = {
//       todos: [],
//       // __typename: 'State',
//     };
//
//     writeState(state);
//   };
//
//   const client = new ApolloClient({
//     httpLink,
//     cache,
//     resolvers: StateResolvers(getState, writeState),
//     typeDefs,
//   });
//   initState();
//   return client;
// }
//
