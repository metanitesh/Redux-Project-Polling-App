import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
class PollResult extends Component {
  render() {
    const { questions, authUser } = this.props;
    const qid = this.props.match.params.id;
    const question = questions[qid];

    if (!question) {
      return <p>loading</p>;
    }

    const voteOptionOne = question.optionOne.votes.length;
    const textOptionOne = question.optionOne.text;
    const voteOptionTwo = question.optionTwo.votes.length;
    const textOptionTwo = question.optionTwo.text;
    const isUserVotedOptionOne = question.optionOne.votes.includes(authUser);
    const isUserVotedOptionTwo = question.optionTwo.votes.includes(authUser);

    if (!isUserVotedOptionOne && !isUserVotedOptionTwo) {
      return <Redirect to="/" />;
    }

    return (
      <>
        <h3>Polls</h3>
        <div>
          <p>
            {textOptionOne}
            {' '}
            <b>{voteOptionOne}</b>
            <b>{isUserVotedOptionOne ? ' your choice' : ''}</b>
          </p>

          <p>
            {textOptionTwo}
            {' '}
            <b>{voteOptionTwo}</b>
            <b>{isUserVotedOptionTwo ? ' your choice' : ''}</b>
          </p>

        </div>
      </>
    );
  }
}

const mapStateToProps = ({ questions, authUser }) => ({
  questions,
  authUser,
});

export default connect(mapStateToProps)(PollResult);
