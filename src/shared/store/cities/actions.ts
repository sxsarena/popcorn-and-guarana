import { action } from 'typesafe-actions';
import { CitiesTypes } from './types';

export const changeCity = (currentID: string) => action(CitiesTypes.CHANGE_CITY, { currentID });
