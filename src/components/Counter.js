import React from 'react';

const Counter = ({ onClickPlusBtn, onClickMinusBtn, result }) => {
  return (
    <div data-testid='Counter'>
      <button
        data-testid='Counter-plusBtn'
        type='button'
        onClick={onClickMinusBtn}
      >
        -
      </button>
      <span data-testid='result'>{result}</span>
      <button
        data-testid='Counter-minusBtn'
        type='button'
        onClick={onClickPlusBtn}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
