import React from 'react';
import { render } from 'react-dom';
// GlobalAssets
import { injectGlobal } from 'styled-components';
import { COLORS } from './assets/variables';
// Router
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

// GlobalStyle
injectGlobal`
  * {
    margin:0;
    padding:0;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }
  html {
    box-sizing: border-box;
    /* 1rem = 10px, 10px/16px = 62.5% */
    font-size: 62.5%; 
  }
  body {
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    line-height: 1.6;
    min-height: 100vh;
    background-color: ${COLORS.black};
  }
`;

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
