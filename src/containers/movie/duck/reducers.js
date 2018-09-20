import * as types from './types';

const initialState = {
  modalOpen: false,
  movieLoading: false,
  error: false,
  movie: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_MOVIE_OPEN:
      return { ...state, modalOpen: !state.modalOpen };
    case types.FETCH_MOVIE_START:
      return { ...state, movieLoading: true };
    case types.FETCH_MOVIE_COMPLETE:
      return { ...state, movieLoading: false, error: false, movie: action.payload, modalOpen: true };
    case types.FETCH_MOVIE_ERROR:
      return { ...state, movieLoading: false, error: true };
    default:
      return state;
  }
};
