import React from 'react';
import TodoApp from 'components/TodoApp';
import DelayedToggle from 'components/DelayedToggle';
import UserProfile from 'components/UserProfile';

const App = () => {
  return (
    <>
      <TodoApp />
      <DelayedToggle />
      <UserProfile id={1} />
    </>
  );
};

export default App;
