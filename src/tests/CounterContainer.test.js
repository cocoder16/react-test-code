import React from 'react';
import CounterContainer from 'containers/Counter';
import { render, fireEvent } from '@testing-library/react';

// TODO
// Counter 렌더링
// + 버튼 클릭 핸들러 O
// - 버튼 클릭 핸들러

describe('<CounterContainer />', () => {
  const setup = (props = {}) => {
    const utils = render(<CounterContainer {...props} />);
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

  // it('+ - buttons, result span exist', () => {
  //   const { resultText, plusBtn, minusBtn } = setup({ result: 0 });
  //   expect(resultText).toBeTruthy();
  //   expect(plusBtn).toBeTruthy();
  //   expect(minusBtn).toBeTruthy();
  // });

  it('click plus btn => result + 1', () => {
    const { resultText, plusBtn } = setup();
    fireEvent.click(plusBtn);
    expect(resultText).toHaveTextContent('1');
  });
});
