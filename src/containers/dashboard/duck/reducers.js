import * as types from './types';

const initialState = {
  loading: false,
  movies: {},
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_START:
      return { ...state, loading: true };
    case types.FETCH_COMPLETE:
      return { ...state, loading: false, error: false, movies: action.payload };
    case types.FETCH_ERROR:
      return { ...state, laoding: false, error: true };
    default:
      return state;
  }
};
