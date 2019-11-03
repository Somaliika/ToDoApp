import ApolloClient from 'apollo-boost';

const Client = new ApolloClient({
  uri: 'https://todo-mongo-graphql-server.herokuapp.com'
});

export default Client;