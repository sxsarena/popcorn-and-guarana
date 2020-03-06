import { Reducer } from 'redux';
import { MoviesState, MoviesTypes } from './types';

const INITIAL_STATE: MoviesState = {
  data: {
    movies: [],
    filters: []
  },
  error: false,
  loading: false,
  term: ''
};

const reducer: Reducer<MoviesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case MoviesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case MoviesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: {},
      };
    case MoviesTypes.SEARCH_MOVIE:
      return {
      ...state, term: action.payload.term,
      };
    default:
      return state;
  }
};

export default reducer;
