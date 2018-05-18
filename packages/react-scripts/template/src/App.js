import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import { hot } from 'react-hot-loader';
import Raven from 'raven-js';

import store from './config/redux/store';
import history from './config/router/history';
import Layout from './Layout';

class App extends Component {
  componentDidCatch(error, errorInfo) {
    Raven.captureException(error, { extra: errorInfo });
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Layout />
        </Router>
      </Provider>
    );
  }
}

export default hot(module)(App);
