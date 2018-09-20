import React from 'react';
import { shallow, mount } from 'enzyme';
import { DashboardGrid } from '../DashboardGrid';

describe('DashboardGridComponent', () => {
  let props = {
    data: {},
    loading: false,
    error: false,
    onPress: () => {}
  };
  let dashboardGridComponent = shallow(<DashboardGrid {...props} />);
  it('should renders properly', () => {
    expect(dashboardGridComponent).toMatchSnapshot();
  });
});
