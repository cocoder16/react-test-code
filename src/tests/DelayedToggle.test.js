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

  it('toggles text ON/OFF', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText('ON'), { timeout: 2000 }); // 구 waitForElement
    // waitFor의 콜백은 프로미스다. 테스트 케이스가 성공하면 콜백함수의 리턴값을 resolve 하여 반환한다.
    expect(text).toHaveTextContent('ON');
  });

  it('removes text when toggle is OFF', async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitFor(() => getByText('야호!!'), { timeout: 2000 });
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText('야호!!'), {
      // 콜백함수의 리턴값인 엘리먼트가 사라지는지를 테스트 한다.
      timeout: 2000,
    });
  });
});
