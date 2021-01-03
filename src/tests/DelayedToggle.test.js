import React from 'react';
import DelayedToggle from 'components/DelayedToggle';
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitFor(() => getByText('야호!!'), { timeout: 2000 }); // 콜백 안의 함수가 에러를 발생시키지 않을 때 까지 기다리다가,
    // 대기시간이 timeout을 초과하면 테스트 케이스가 실패한다.
  });
});
