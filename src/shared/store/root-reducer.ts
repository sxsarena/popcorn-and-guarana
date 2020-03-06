import { combineReducers } from 'redux';

import cities from './cities';
import movies from './movies';

const createRootReducer = () =>
  combineReducers({
    movies,
    cities
  });

export default createRootReducer;
