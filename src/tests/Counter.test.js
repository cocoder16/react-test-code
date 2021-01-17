import React from 'react';
import Counter from 'components/Counter';
import {
  render,
  fireEvent,
  // waitFor,
  // waitForElementToBeRemoved,
} from '@testing-library/react';

// TODO
// +, -, result 존재 O
// + 버튼 클릭 핸들러 O
// - 버튼 클릭 핸들러
// + 누르면 숫자++
// - 누르면 숫자--

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
    const { plusBtn, minusBtn } = setup({ onClickPlusBtn, onClickMinusBtn });
    fireEvent.click(plusBtn);
    fireEvent.click(minusBtn);
    expect(onClickPlusBtn).toHaveBeenCalledTimes(1);
    expect(onClickMinusBtn).toHaveBeenCalledTimes(1);
  });
});
