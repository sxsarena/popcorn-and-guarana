import { all, takeLatest } from 'redux-saga/effects';

import { MoviesTypes } from './movies/types';
import { load } from './movies/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(MoviesTypes.LOAD_REQUEST, load),
  ]);
}
