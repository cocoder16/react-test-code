import React from 'react';
import TodoApp from 'components/TodoApp';
import DelayedToggle from 'components/DelayedToggle';

const App = () => {
  return (
    <>
      <TodoApp />
      <DelayedToggle />
    </>
  );
};

export default App;
