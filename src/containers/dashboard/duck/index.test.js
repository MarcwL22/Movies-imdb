import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as types from './types';
import { fetchMovies } from '.';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({
  dashboardReducer: {
    loading: false,
    movies: {},
    error: false
  }
});
const mock = new MockAdapter(axios);

describe('dashboardActions', () => {
  it('should creates an async action to fetch the fetchMovies', () => {
    const mockResponse = {
      Search: [
        {
          Title: 'Batman v Superman: Dawn of Justice',
          Year: '2016',
          imdbID: 'tt2975590',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        }
      ]
    };
    const expectedActions = [{ type: types.FETCH_START }, { type: types.FETCH_COMPLETE, payload: mockResponse }];
    mock.onGet('http://www.omdbapi.com/?apikey=f259c58a', { params: { s: 'superman' } }).reply(200, mockResponse);
    store.dispatch(fetchMovies('superman')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
