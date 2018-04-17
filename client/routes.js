import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import history from './history';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Main, Home } from './components';

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Main>
          <Route exact path='/' component={Home} />
        </Main>
      </Router>
    )
  }
}
export default Routes;
