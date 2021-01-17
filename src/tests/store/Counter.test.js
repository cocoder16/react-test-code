import * as Actions from 'store/actions/Counter';

// plus action 생성
// minus action 생성
// plus 리듀스
// minus 리듀스

describe('actions', () => {
  it('create actions', () => {
    const prefix = 'COUNTER';
    const expectedAction = {
      type: `${prefix}/PLUS`,
    };
    const action = Actions.plus();
    expect(action).toEqual(expectedAction);
  });
});
