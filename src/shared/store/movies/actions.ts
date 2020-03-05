import { action } from 'typesafe-actions';
import { MoviesTypes, IMovie } from './types';

export const loadRequest = (cityId: string) => action(MoviesTypes.LOAD_REQUEST, { cityId });

export const loadSuccess = (data: IMovie[]) => action(MoviesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(MoviesTypes.LOAD_FAILURE);
