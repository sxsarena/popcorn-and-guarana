import { action } from 'typesafe-actions';
import { MoviesTypes, IMovie } from './types';

export const loadRequest = () => action(MoviesTypes.LOAD_REQUEST);

export const loadSuccess = (data: IMovie[]) => action(MoviesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(MoviesTypes.LOAD_FAILURE);
