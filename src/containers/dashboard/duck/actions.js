import * as types from './types';

export const fetchStart = () => ({ type: types.FETCH_START });
export const fetchError = () => ({ type: types.FETCH_ERROR });
export const fetchComplete = movies => ({
  type: types.FETCH_COMPLETE,
  payload: movies
});
