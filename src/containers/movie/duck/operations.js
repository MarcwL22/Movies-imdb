import * as Creators from './actions';
import axios from 'axios';
import config from '../../../config';

const { APIKEY } = config;

export const openCloseMovieModal = () => dispatch => {
  dispatch(Creators.handleMovieModal());
};

export const fetchMovie = imdbId => dispatch => {
  dispatch(Creators.fetchMovieStart());
  axios
    .get(`http://www.omdbapi.com/?apikey=${APIKEY}`, {
      params: {
        i: imdbId
      }
    })
    .then(({ data }) => dispatch(Creators.fetchMovieComplete(data)))
    .catch(() => dispatch(Creators.fetchMovieError()));
};
