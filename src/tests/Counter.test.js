import React from 'react';
import Counter from 'components/Counter';
import {
  render,
  // fireEvent,
  // waitFor,
  // waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<Counter />', () => {
  it('+ - buttons, result span exist', () => {
    const { getByText } = render(<Counter />);
    getByText('0');
    getByText('+');
    getByText('-');
  });

  it('click (+) button', () => {
    const onClickPlusBtn = jest.fn();
    const { getByText } = render(<Counter onClickPlusBtn={onClickPlusBtn} />);
    const plusBtn = getByText('+');
    const resultText = getByText('0');
    fireEvent.click(plusBtn);
    expect(onClickPlusBtn).toHaveBeenCalled();
    expect(resultText).toHaveTextContent('1');
  });
});
