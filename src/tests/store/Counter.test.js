import * as Actions from 'store/actions/Counter';
import reducer from 'store/reducers/Counter';

// plus action 생성 O
// minus action 생성 O
// 초기 state O
// plus 리듀스 O
// minus 리듀스

describe('Counter store', () => {
  const prefix = 'COUNTER';
  const expectedAction = {
    plus: { type: `${prefix}/PLUS` },
    minus: { type: `${prefix}/MINUS` },
  };

  it('create actions', () => {
    const action = {
      plus: Actions.plus,
      minus: Actions.minus,
    };
    Object.keys(action).forEach(key => {
      expect(action[key]()).toEqual(expectedAction[key]);
    });
  });

  it('initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      result: 0,
    });
  });

  it('plus reducer', () => {
    expect(reducer(undefined, expectedAction.plus)).toEqual({
      result: 1,
    });
  });
});
