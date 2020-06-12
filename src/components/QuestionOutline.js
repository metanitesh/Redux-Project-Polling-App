import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prefer-stateless-function
class Question extends Component {
  render() {
    const { question, users, type } = this.props;
    const authorName = question.author;
    const authorProfile = users[authorName];

    let url = `questions/${question.id}`;
    let linkText = 'Answer';

    if (type === 'answered') {
      url = `polls/${question.id}`;
      linkText = 'View Poll';
    }

    return (
      <div>
        <img src={authorProfile.avatarURL} height="40px" />
        {authorProfile.name}
        {' '}
        asked  _
        {question.id}
        _
        <Link to={url}>{linkText}</Link>
        {/* {this.props.user.name} */}
        {/* {users[question['author']]} */}
      </div>
    );
  }
}

const mapStateToProps = ({ questions, users, authUser }, { id, type }) => ({
  question: questions[id],
  authUser,
  users,
  type,
});

export default connect(mapStateToProps)(Question);
