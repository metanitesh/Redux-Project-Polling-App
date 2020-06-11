import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import { getInitialData } from './actions/sharedAction';

import Home from './components/Home';
import Login from './components/Login';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialData());
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </div>
    );
  }
}

export default connect()(App);
