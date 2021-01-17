import React from 'react';
import Counter from 'components/Counter';
import { render, fireEvent } from '@testing-library/react';

// TODO
// +, -, result 존재 O
// + 버튼 클릭 리스너 O
// - 버튼 클릭 리스너 O

describe('<Counter />', () => {
  const setup = (props = {}) => {
    const utils = render(<Counter {...props} />);
    const { getByText, getByTestId } = utils;
    const resultText = getByTestId('result');
    const plusBtn = getByText('+');
    const minusBtn = getByText('-');
    return {
      ...utils,
      resultText,
      plusBtn,
      minusBtn,
    };
  };

  it('+ - buttons, result span exist', () => {
    const { resultText, plusBtn, minusBtn } = setup({ result: 0 });
    expect(resultText).toBeTruthy();
    expect(plusBtn).toBeTruthy();
    expect(minusBtn).toBeTruthy();
  });

  it('click + - buttons', () => {
    const onClickPlusBtn = jest.fn();
    const onClickMinusBtn = jest.fn();
    const { plusBtn, minusBtn } = setup({
      onClickPlusBtn,
      onClickMinusBtn,
    });
    fireEvent.click(plusBtn);
    expect(onClickPlusBtn).toHaveBeenCalledTimes(1);
    fireEvent.click(minusBtn);
    expect(onClickMinusBtn).toHaveBeenCalledTimes(1);
  });
});
