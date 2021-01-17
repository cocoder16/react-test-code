import {
  combineReducers,
  createStore,
  // applyMiddleware
} from 'redux';
// import thunk from 'redux-thunk';
import Counter from './reducers/Counter';

const store = createStore(
  combineReducers({
    Counter,
  })
  // applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log('Store Updated', store.getState());
});

export default store;
