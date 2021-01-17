import { PLUS, MINUS } from 'store/actions/Counter';

//module's initial state
const initialState = {
  result: 0,
};

//reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PLUS:
      return { ...state, id: action.payload };
    default:
      return state;
  }
}
