import React from 'react';
import App from 'App';
import { render, fireEvent } from '@testing-library/react';

// Counter 통합테스트

describe('intergration test', () => {
  const setup = (props = {}) => {
    const utils = render(<App {...props} />);
    const { getByTestId } = utils;
    const resultText = getByTestId('result');
    // 컴포넌트 유닛테스트에서는 +, -가 렌더링 되는지 알기 위해 text로 찾았지만 통합테스트에서는 정확히 +, -를 확정짓기 위해 testid를 사용한다.
    const plusBtn = getByTestId('Counter-plusBtn');
    const minusBtn = getByTestId('Counter-minusBtn');
    return {
      ...utils,
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
