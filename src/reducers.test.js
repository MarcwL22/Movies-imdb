import rootReducer from './reducers';
describe('rootReducer', () => {
  it('should initializes the default store', () => {
    expect(rootReducer({}, {})).toEqual({
      dashboardReducer: {
        loading: false,
        movies: {},
        error: false
      },
      movieReducer: {
        modalOpen: false,
        movieLoading: false,
        error: false,
        movie: {}
      }
    });
  });
});
