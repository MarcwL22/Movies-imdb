import * as Creators from './actions';
import axios from 'axios';
import config from '../../../config';

const { APIKEY } = config;

export const fetchMovies = searchText => {
  let req = axios.get(`http://www.omdbapi.com/?apikey=${APIKEY}`, {
    params: {
      s: searchText
    }
  });
  return dispatch => {
    dispatch(Creators.fetchStart());
    return req.then(({ data }) => dispatch(Creators.fetchComplete(data))).catch(() => dispatch(Creators.fetchError()));
  };
};
