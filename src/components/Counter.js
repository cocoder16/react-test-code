import React from 'react';

const Counter = ({ onClickPlusBtn, result }) => {
  return (
    <>
      <button>-</button>
      <span>{result}</span>
      <button type='button' onClick={onClickPlusBtn}>
        +
      </button>
    </>
  );
};

export default Counter;
