import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import navReducer from './reducers/nav-reducer';

const store = createStore(
  combineReducers({
    form: formReducer,
    navRed: navReducer
  }),
  applyMiddleware(thunk)
);

export default store;
