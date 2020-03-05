import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { loadSuccess, loadFailure } from './actions';

interface Action {
  payload: {
    cityId: string
  }
}

export function* load(action: Action) {
  try {
    const response = yield call(api.get, `movies/${action.payload.cityId}`);

    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
