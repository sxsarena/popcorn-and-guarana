import { combineReducers } from 'redux';

import movies from './movies';

const createRootReducer = () =>
  combineReducers({
    movies,
  });

export default createRootReducer;
