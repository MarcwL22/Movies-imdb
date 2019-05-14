import { combineReducers } from 'redux';
// Reducers
import dashboardReducer from './containers/dashboard/duck';
import movieReducer from './containers/movie/duck';

export default combineReducers({
  dashboardReducer,
  movieReducer
});
