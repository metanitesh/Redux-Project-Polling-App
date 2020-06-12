import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getInitialData } from './actions/sharedAction';

import Home from './components/Home';
import Login from './components/Login';
import Question from './components/Question';

import 'bootstrap/dist/css/bootstrap.min.css';
import PollResult from './components/PollResult';
import LeadersBoard from './components/LeadersBoard';
import newQuestion from './components/newQuestion';

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
        <Route exact path="/questions/:id" component={Question} />
        <Route exact path="/polls/:id" component={PollResult} />
        <Route exact path="/leaderboard" component={LeadersBoard} />
        <Route exact path="/new-question" component={newQuestion} />

      </div>
    );
  }
}

export default connect()(App);
