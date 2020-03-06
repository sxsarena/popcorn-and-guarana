import { Reducer } from 'redux';
import { CitiesState, CitiesTypes } from './types';

const INITIAL_STATE: CitiesState = {
  currentID: '',
  states: [],
  cities: []
};

const reducer: Reducer<CitiesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CitiesTypes.CHANGE_CITY:
      return {
      ...state, currentID: action.payload.currentID,
      };
    default:
      return state;
  }
};

export default reducer;
