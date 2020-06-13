import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import formatDate from './../helper';

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
      <div className="card mt-3 d-flex p-2 flex-row">
        <div className="mr-3">
          <img src={authorProfile.avatarURL} height="40px" />
          
        </div>
        <div className="mr-3">
          <span className="text-muted">
            {authorProfile.name}
            {' '}
            asked
            {' '}
            {formatDate(question.timestamp)}
          </span>
          <span>
            {' '}
            _
            {question.optionOne.text}
          </span>
          _
        </div>

        <div className="mr-3"><Link to={url}>{linkText}</Link></div>

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
