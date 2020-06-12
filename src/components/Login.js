/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authUser } from '../actions/authUserAction';

class Login extends Component {
  state = {
    selectedUser: 'none',
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      selectedUser: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { dispatch } = this.props;
    const { selectedUser } = this.state;
    if (selectedUser !== 'none') {
      dispatch(authUser(selectedUser));
    }
  }

  render() {
    const { users, authUser } = this.props;
    const { selectedUser } = this.state;
    console.log(authUser);
    if (authUser) {
      return <Redirect to="/home" />;
    }


    return (
      <>
        <h3>Select the user</h3>
        <form onSubmit={this.handleSubmit}>
          <select value={selectedUser} onChange={this.handleChange}>
            <option disabled value="none">
              Select an Option
            </option>
            {users.map((user) => <option key={user}>{user}</option>)}
          </select>
          <br />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}


export default connect(({ users, authUser }) => ({
  users: Object.keys(users),
  authUser,
}))(Login);
