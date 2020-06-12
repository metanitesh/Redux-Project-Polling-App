/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class LeadersBoard extends Component {
  
  getLength(obj) {
    return Object.keys(obj).length;
  }

  render() {
    const { users } = this.props;
    const usersKey = Object.keys(users);
    return (
      <>
        {usersKey.map((name) => {
          const user = users[name];
          return (
            <div key={name}>
              <p>{user.name}</p>
              <p>{this.getLength(user.answers)}</p>
              <p>{user.questions.length}</p>
            </div>
          );
        })}
        <br />
      </>
    );
  }
}

const mapsStateToProps = ({ users }) => ({
  users,
});

export default connect(mapsStateToProps)(LeadersBoard);
