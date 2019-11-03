import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import ToDoApp from './containers/ToDoApp';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import Client from './services/Client';

const App = () => {
  return (
    <ApolloProvider client={Client}>
      <ToDoApp/>
    </ApolloProvider>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
