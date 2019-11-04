import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from "apollo-link-http";
import { ApolloClient } from 'apollo-client';

const Client = new ApolloClient({
  link: createHttpLink({ uri: "https://todo-mongo-graphql-server.herokuapp.com" }),
  cache: new InMemoryCache(),
});
export default Client;
