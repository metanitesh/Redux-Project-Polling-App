import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { unAuthUser } from '../actions/authUserAction';

class Nav extends Component {
  logout = () => {
    console.log("logout")
    const { dispatch } = this.props;
    dispatch(unAuthUser());
  }

  render() {
    // console.log(this.props.authUser);
    if (!this.props.authUser) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <Link to="/leaderboard"> Leader Board</Link>
        <Link to="/new-question"> New question </Link>
        <button type="button" onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

const mapStateToProp = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProp)(Nav);
