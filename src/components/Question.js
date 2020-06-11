import React, { Component } from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line react/prefer-stateless-function
class Question extends Component {
  render() {
    const {question, users, authUser} = this.props;
    const authorName = question['author'];
    const authorProfile = users[authorName];
    console.log(authorProfile);
    // console.log(user)
    // console.log(this.props)
    return (
      <div>
        <img src={authorProfile.avatarURL} height="40px" />
        {authorProfile.name} asked  _{question.id}_
        <button>
          view poll
        </button>
        {/* {this.props.user.name} */}
        {/* {users[question['author']]} */}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authUser }, { id }) => ({
  question: questions[id],
  authUser,
  users,
});

export default connect(mapStateToProps)(Question);