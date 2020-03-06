/* Action types */
export enum MoviesTypes {
  LOAD_REQUEST = '@movies/LOAD_REQUEST',
  LOAD_SUCCCES = '@movies/LOAD_SUCCCES',
  LOAD_FAILURE = '@movies/LOAD_FAILURE'
}

/* Data types */
export interface ITrailer {
  type: string,
  url: string,
  embeddedUrl: string
};

export interface IThumb {
  url: string,
  type: string
};

export interface IMovie {
  id: string,
  title: string,
  city: string,
  siteURL: string,
  images: IThumb[],
  genres: string[],
  trailers: ITrailer[],
  thumb: string,
  filters: string[]
}

export interface IFilter {
  name: string,
  checked?: boolean
}

/* State type */
export interface MoviesState {
  readonly data: { movies?: IMovie[], filters?: IFilter[] },
  readonly loading: boolean,
  readonly error: boolean
}
