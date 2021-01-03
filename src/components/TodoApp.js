import React, { useState, useRef, useCallback } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'TDD 배우기',
      done: true,
    },
    {
      id: 2,
      text: 'react-testing-library 사용하기',
      done: true,
    },
  ]);

  const nextId = useRef(3); // 새로 추가 할 항목에서 사용 할 id

  const onInsert = useCallback(text => {
    // 새 항목 추가 후
    setTodos(todos =>
      todos.concat({
        id: nextId.current,
        text,
        done: false,
      })
    );
    // nextId 값에 1 더하기
    nextId.current += 1;
  }, []);

  const onToggle = useCallback(
    // TodoItem 리렌더링 최적화 이전 (React.memo 사용 전) 코드 => todos가 바뀌면 모든 todoItem이 리렌더링 되었음.
    // setTodos를 사용할 때 새 상태를 파라미터로 넣어주고 있고, useCallback의 dep로 todos를 넣어줘야 했음.
    // todos가 바뀔 때마다 callback 함수도 재생성되고, 이에 따라 TodoItem이 리렌더링되기 때문에 React.memo를 써도 최적화가 안되었음.

    // (id) => {
    //   setTodos(
    //     todos.map((todo) =>
    //       todo.id === id ? { ...todo, done: !todo.done } : todo
    //     )
    //   );
    // },
    // [todos]

    // TodoItem 리렌더링 최적화 이후 (React.memo 사용 후) 코드 => todos가 바뀌면 바뀐 todoItem만 리렌더링 됨.
    // setTodos의 파라미터로서 updater를 사용함으로서, useCallback의 dep로 todos를 넣어줄 필요가 없음.
    // todos가 바뀔 때마다 callback 함수를 재생성하지 않기 때문에, TodoItem에 React.memo를 쓴게 최적화에 도움이 됨.

    id => {
      setTodos(todos =>
        todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    },
    []
  );

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
    </>
  );
};

export default TodoApp;
