/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';

class LeadersBoard extends Component {
  getLength(obj) {
    return Object.keys(obj).length;
  }

  render() {
    const { users } = this.props;
    const usersKey = Object.keys(users);
    const userKeysSorted = usersKey.sort((a, b) => {
      const totalB = users[b].questions.length + this.getLength(users[b].answers);
      const totalA = users[a].questions.length + this.getLength(users[a].answers);
      return totalB - totalA;
    });
    return (
      <>
        <Nav />
        {userKeysSorted.map((name) => {
          const user = users[name];
          return (
            <div key={name} className="card mt-3 d-flex p-2 flex-row">
              <div className="mr-3">
                <img src={user.avatarURL} height="40px" className="" />
              </div>
              <div className="mr-3">
                <span>{user.name}</span>
                <span>
                  {' '}
                  | Answers -
                  {this.getLength(user.answers)}
                </span>
                <span>
                  {' '}
                  | Questions -
                  {user.questions.length}
                </span>
                <span>
                  {' '}
                  | Total -
                  {user.questions.length + this.getLength(user.answers)}
                </span>
              </div>
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
