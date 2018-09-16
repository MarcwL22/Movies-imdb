import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// reducer
import reducer from './reducers';
// Pages
import DashboardContainer from './containers/dashboard/DashboardContainer';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer, {}, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Router>
      <Route exact path={'/'} component={DashboardContainer} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
