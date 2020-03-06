import { action } from 'typesafe-actions';
import { MoviesTypes, IMovie } from './types';

export const loadRequest = (cityId: string) => action(MoviesTypes.LOAD_REQUEST, { cityId });

export const loadSuccess = (data: { movies: IMovie[], filters: [] }) => action(MoviesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(MoviesTypes.LOAD_FAILURE);
