import React from 'react';
import Counter from 'components/Counter';
import {
  render,
  fireEvent,
  // waitFor,
  // waitForElementToBeRemoved,
} from '@testing-library/react';

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

  it('click (+) button', () => {
    const onClickPlusBtn = jest.fn();
    const { plusBtn } = setup({ onClickPlusBtn });
    fireEvent.click(plusBtn);
    expect(onClickPlusBtn).toHaveBeenCalledTimes(1);
  });
});
