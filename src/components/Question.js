/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestionAnswer } from './../actions/questionAction';
import Nav from './Nav';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class Question extends Component {
  state={
    answer: null,
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      answer: value,
    });
  }

  handleSubmit = (event) => {
    // authedUser, qid, answer
    event.preventDefault();
    const { answer } = this.state;
    const qid = this.props.match.params.id;
    const { dispatch } = this.props;
    dispatch(saveQuestionAnswer(qid, answer));
  }

  render() {
    const { questions, users, authUser } = this.props;
    if (!Object.keys(questions).length || !Object.keys(users).length) {
      return <div> Loading.... </div>;
    }

    const { id } = this.props.match.params;

    const question = questions[id];
    // const { author } = question;
    const authorProfile = users[authUser];
    const authorAnswers = Object.keys(authorProfile.answers);

    if (authorAnswers.includes(id)) {
      return <Redirect to={`/polls/${id}`} />;
    }
    return (
      <>
        <Nav />
        <img alt="avatar" src={`/${authorProfile.avatarURL}`} height="40px" />
        {question.author}
        {' '}
        asked - Would you rather :


        <form onSubmit={this.handleSubmit}>
          <input type="radio" value="optionOne" name="answer" onChange={this.handleChange} />
          {question.optionOne.text}
          <input type="radio" value="optionTwo" name="answer" onChange={this.handleChange} />
          {question.optionTwo.text}
          <br />
          <button type="submit">Submit</button>
        </form>

      </>
    );
  }
}

const mapStateToProps = ({ questions, users, authUser }) => ({
  questions,
  users,
  authUser,
});

export default connect(mapStateToProps)(Question);
