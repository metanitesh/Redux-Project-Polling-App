import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
  render() {
    return (
      <>
        <Nav />
        Home
      </>
    );
  }
}

// connect()(Home);
