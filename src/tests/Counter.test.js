import React from 'react';
import Counter from 'components/Counter';
import {
  render,
  fireEvent,
  // waitFor,
  // waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<Counter />', () => {
  it('+ - buttons, result span exist', () => {
    const { getByText } = render(<Counter result='0' />); // todo: number넣고 string으로 변환
    getByText('0');
    getByText('+');
    getByText('-');
  });

  it('click (+) button', () => {
    const onClickPlusBtn = jest.fn();
    const { getByText } = render(<Counter onClickPlusBtn={onClickPlusBtn} />);
    const plusBtn = getByText('+');
    fireEvent.click(plusBtn);
    expect(onClickPlusBtn).toHaveBeenCalledTimes(1);
  });
});
