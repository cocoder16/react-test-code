import React from 'react';

const Counter = ({ onClickPlusBtn, onClickMinusBtn, result }) => {
  return (
    <>
      <button type='button' onClick={onClickMinusBtn}>
        -
      </button>
      <span data-testid='result'>{result}</span>
      <button type='button' onClick={onClickPlusBtn}>
        +
      </button>
    </>
  );
};

export default Counter;
