import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getInitialData } from './actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInitialData());
  }

  render() {
    return (
      <div className="App">
        <Route exact match="/" component={Login} />
      </div>
    );
  }
}

export default connect()(App);
