import React from 'react';
import Counter from 'components/Counter';
import {
  render,
  // fireEvent,
  // waitFor,
  // waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<Counter />', () => {
  it('+ - buttons, result span exist', async () => {
    const { getByText } = render(<Counter />);
    getByText('0');
    getByText('+');
    getByText('-');
  });
});
