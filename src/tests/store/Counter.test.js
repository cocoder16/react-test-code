import * as Actions from 'store/actions/Counter';
import reducer from 'store/reducers/Counter';

// plus action 생성 O
// minus action 생성 O
// 초기 state O
// plus 리듀스
// minus 리듀스

describe('actions', () => {
  it('create actions', () => {
    const prefix = 'COUNTER';
    const expectedAction = [
      { type: `${prefix}/PLUS` },
      { type: `${prefix}/MINUS` },
    ];
    const action = [Actions.plus(), Actions.minus()];
    expect(action).toEqual(expectedAction);
  });

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      result: 0,
    });
  });
});
