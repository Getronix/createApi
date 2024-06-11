import React from 'react';
import RestPosts from './components/RestPosts';
import GraphQLPosts from './components/GraphQLPosts';
import Chat from './components/Chat';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux CreateApi Example</h1>
        <RestPosts />
        <GraphQLPosts />
        <Chat />
      </div>
    </Provider>
  );
};

export default App;