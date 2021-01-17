import React from 'react';
import App from 'App';
import { render, fireEvent } from '@testing-library/react';

// Counter 통합테스트

describe('intergration test', () => {
  const setup = (props = {}) => {
    const utils = render(<App {...props} />);
    const { getByTestId } = utils;
    const resultText = getByTestId('result');
    const plusBtn = getByText('+');
    const minusBtn = getByText('-');
    return {
      ...utils,
      counterComponent,
      resultText,
      plusBtn,
      minusBtn,
    };
  };

  describe('Counter', () => {
    const { getByTestId, resultText, plusBtn, minusBtn } = setup();
    getByTestId('Counter');

    it('initial result is 0 rendered => click plus btn 2 times, minus btn 1 time => result 1 rendered', () => {
      expect(resultText).toHaveTextContent(0);

      for (let i = 0; i < 2; i++) {
        fireEvent.click(plusBtn);
        expect(resultText).toHaveTextContent(i + 1);
      }
      fireEvent.click(minusBtn);
      expect(resultText).toHaveTextContent(1);
    });
  });
});
