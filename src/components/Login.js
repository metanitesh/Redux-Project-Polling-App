/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { authUser } from '../actions/authUserAction';

class Login extends Component {
  state = {
    selectedUser: 'none',
  }

  handleChange = (event) => {
    const { value } = event.target;
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
    console.log(this.props);
  }

  render() {
    const { users, authUser } = this.props;
    const { selectedUser } = this.state;

    const{state} = this.props.location;

    // console.log("*******", this.props.location.state);
    if (authUser && state && state.referrer) {
      return <Redirect to={state.referrer} />;
    }
    
    if (authUser) {
      return <Redirect to="/home" />;
    }


    return (
      <div className="login-container h100 center">
        <h3 className="login-header text-center">Welcome to the Would you Rather</h3>
        <div className="card w75 text-center">
          <div className="card-body">
            <h3 className="card-title">Select the user</h3>
            <form onSubmit={this.handleSubmit}>
              <p>
                <select value={selectedUser} onChange={this.handleChange} className="select-user">
                  <option disabled value="none">
                    Select an Option
                  </option>
                  {users.map((user) => <option key={user}>{user}</option>)}
                </select>
              </p>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(({ users, authUser }) => ({
  users: Object.keys(users),
  authUser,
}))(Login);
