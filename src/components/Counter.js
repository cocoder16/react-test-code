import React from 'react';

const Counter = ({ onClickPlusBtn, onClickMinusBtn, result }) => {
  return (
    <div data-testid='Counter'>
      <button type='button' onClick={onClickMinusBtn}>
        -
      </button>
      <span data-testid='result'>{result}</span>
      <button type='button' onClick={onClickPlusBtn}>
        +
      </button>
    </div>
  );
};

export default Counter;
