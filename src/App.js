import React from 'react';
import { Provider } from 'react-redux';

import TodoApp from 'components/TodoApp';
import DelayedToggle from 'components/DelayedToggle';
import UserProfile from 'components/UserProfile';
import CounterContainer from 'containers/Counter';
import store from 'store/index';

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
      <DelayedToggle />
      <UserProfile id={1} />
      <CounterContainer />
    </Provider>
  );
};

export default App;
