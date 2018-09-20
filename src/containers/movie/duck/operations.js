import * as Creators from './actions';
// ApiService
import { Api } from '../../../services/Api';

export const openCloseMovieModal = () => dispatch => {
  dispatch(Creators.handleMovieModal());
};

export const fetchMovie = imdbId => dispatch => {
  dispatch(Creators.fetchMovieStart());
  Api.get('', {
    params: {
      i: imdbId
    }
  })
    .then(({ data }) => {
      console.log(data);
      dispatch(Creators.fetchMovieComplete(data));
    })
    .catch(() => dispatch(Creators.fetchMovieError()));
};
