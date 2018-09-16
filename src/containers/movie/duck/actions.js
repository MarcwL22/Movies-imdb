import * as types from './types';

export const fetchMovieStart = () => ({ type: types.FETCH_MOVIE_START });
export const fetchMovieError = () => ({ type: types.FETCH_MOVIE_ERROR });
export const fetchMovieComplete = movie => ({
  type: types.FETCH_MOVIE_COMPLETE,
  payload: movie
});
