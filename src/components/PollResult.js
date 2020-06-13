import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
// eslint-disable-next-line react/prefer-stateless-function
class PollResult extends Component {
  render() {
    const {
      questions, users, authUser, location, match,
    } = this.props;
    if (!authUser) {
      return (
        <Redirect to={{
          pathname: '/',
          state: { referrer: location.pathname },
        }}
        />
      );
    }
    const qid = match.params.id;
    const question = questions[qid];

    if (!Object.keys(questions).length || !Object.keys(users).length) {
      return <div> Loading.... </div>;
    }

    if (!question) {
      return (
        <>
          <Nav />
          <h4 className="m-5 text-center">404 Question not found</h4>
        </>
      );
    }

    const voteOptionOne = question.optionOne.votes.length;
    const textOptionOne = question.optionOne.text;
    const voteOptionTwo = question.optionTwo.votes.length;
    const textOptionTwo = question.optionTwo.text;
    const isUserVotedOptionOne = question.optionOne.votes.includes(authUser);
    const isUserVotedOptionTwo = question.optionTwo.votes.includes(authUser);
    const totalVote = voteOptionOne + voteOptionTwo;

    const author = users[question.author];

    if (!isUserVotedOptionOne && !isUserVotedOptionTwo) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <Nav />
        <h3 className="mt-4">Polls</h3>
        <div className="card p-3 poll-container">
          <h4 className="poll-header text-center">
            <img alt="avatar" src={`/${author.avatarURL}`} height="40px" />
            {author.name}
            {' '}
            Asked - Would you Rather?
          </h4>

          <h5 className="text-center">
            *
            {textOptionOne}
            {' '}
            -
            {voteOptionOne}
            /
            {totalVote}
            {' '}
            (
            {((voteOptionOne * 100) / totalVote).toFixed(2)}
            %)
            <span className={isUserVotedOptionOne ? 'badge badge-primary' : ''}>
              {' '}
              {isUserVotedOptionOne && 'your choice'}
            </span>
          </h5>
          <h5 className="text-center">
            *
            {textOptionTwo}
            {' '}
            -
            {voteOptionTwo}
            /
            {totalVote}
            {' '}
            (
            {((voteOptionTwo * 100) / totalVote).toFixed(2)}
            %)
            <span className={isUserVotedOptionTwo ? 'badge badge-primary' : ''}>
              {' '}
              {isUserVotedOptionTwo && 'your choice'}
            </span>
          </h5>


        </div>
      </>
    );
  }
}

const mapStateToProps = ({ questions, authUser, users }) => ({
  questions,
  authUser,
  users,
});

export default connect(mapStateToProps)(PollResult);
