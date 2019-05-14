import React from 'react';
import { shallow, mount } from 'enzyme';
import { DashboardContainer } from './DashboardContainer';

describe('DashboardContainer', () => {
  let props = {
    movies: {},
    loading: false,
    error: false
  };
  let dashboard = shallow(<DashboardContainer {...props} />);
  it('should renders properly', () => {
    expect(dashboard).toMatchSnapshot();
  });
  describe.skip('should when mounted', () => {
    const mockFetchMovies = jest.fn();
    beforeEach(() => {
      props.fetchMovies = mockFetchMovies;
      dashboard = mount(<DashboardContainer {...props} />);
    });
    it('should dispatches the `fetchMovies()` method it receives from props', () => {
      expect(mockFetchMovies).toHaveBeenCalled();
    });
  });
});
