import { Reducer } from 'redux';
import { MoviesState, MoviesTypes } from './types';

const INITIAL_STATE: MoviesState = {
  data: {},
  error: false,
  loading: false,
};

const reducer: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true, cityId: action.payload.cityId };
    case MoviesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case MoviesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    default:
      return state;
  }
};

export default reducer;
