import thunk  from 'redux-thunk';
import logger from 'redux-logger';
import {
  createStore, applyMiddleware, combineReducers
} from 'redux';

import usersReducer          from './users';

const reducers = {
  users: usersReducer,
};

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(thunk, logger)
);

export default store;
