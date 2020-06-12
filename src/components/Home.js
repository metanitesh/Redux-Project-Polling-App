import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Question from './QuestionOutline';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    const { questions, users, authUser } = this.props;

    if (!authUser) {
      return <Redirect to="/" />;
    }

    let authUserProfile = users[authUser];
    let authUserAnswers = [];
    let newQuestions = [];
    let loading = false;

    if (authUserProfile && questions.length) {
      authUserProfile = users[authUser];
      authUserAnswers = Object.keys(authUserProfile.answers);
      newQuestions = questions.filter((question) => !authUserAnswers.includes(question));
    } else {
      loading = true;
    }

    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <>
        <Nav />
        <h3>New Questions</h3>
        {newQuestions.map((question) => <Question key={question} id={question} type="new" />)}

        <h3>Answered questions</h3>
        {authUserAnswers.map((question) => <Question key={question} id={question} type="answered" />)}
      </>
    );
  }
}

const mapStateToProp = ({ questions, users, authUser }) => ({
  questions: Object.keys(questions),
  users,
  authUser,
});


export default connect(mapStateToProp)(Home);
