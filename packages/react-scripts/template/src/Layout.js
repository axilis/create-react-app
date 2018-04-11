import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './modules/Home';

class Layout extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default Layout;
