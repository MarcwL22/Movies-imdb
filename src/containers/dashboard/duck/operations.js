import * as Creators from './actions';
// API Service
import { Api } from '../../../services/Api';

export const fetchMovies = searchText => dispatch => {
  dispatch(Creators.fetchStart());
  Api.get('', {
    params: {
      s: searchText
    }
  })
    .then(({ data }) => {
      console.log(data);
      dispatch(Creators.fetchComplete(data));
    })
    .catch(() => dispatch(Creators.fetchError()));
};
