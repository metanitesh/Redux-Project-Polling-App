/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { saveQuestionAnswer } from '../actions/questionAction';
import Nav from './Nav';

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
    event.preventDefault();
    const { answer } = this.state;
    const { dispatch, match } = this.props;
    const qid = match.params.id;
    dispatch(saveQuestionAnswer(qid, answer));
  }

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

    if (!Object.keys(questions).length || !Object.keys(users).length) {
      return <div> Loading.... </div>;
    }

    const { id } = match.params;

    const question = questions[id];
    if (!question) {
      return (
        <>
          <Nav />
          <h4 className="m-5 text-center">404 Question not found</h4>
        </>
      );
    }

    const authorProfile = users[authUser];
    const authorAnswers = Object.keys(authorProfile.answers);

    if (authorAnswers.includes(id)) {
      return <Redirect to={`/polls/${id}`} />;
    }
    return (
      <>
        <Nav />
        <div className="login-container h100 border p-5 center">

          <h5>
            <img alt="avatar" src={`/${users[question.author].avatarURL}`} height="40px" />
            {question.author}
            {' '}
            asked - Would you rather :
          </h5>


          <form onSubmit={this.handleSubmit}>
            <p>
              <input type="radio" value="optionOne" name="answer" onChange={this.handleChange} />
              {question.optionOne.text}
            </p>
            <p>
              <input type="radio" value="optionTwo" name="answer" onChange={this.handleChange} />
              {question.optionTwo.text}
            </p>
            <button type="submit">Submit</button>
          </form>
        </div>
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
