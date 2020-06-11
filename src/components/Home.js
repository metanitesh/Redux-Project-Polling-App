import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './Nav';
import Question from './Question';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  render() {
    const { questions, users, authUser } = this.props;

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
        {newQuestions.map((question) => <Question key={question} id={question} />)}

        <h3>Answered questions</h3>
        {authUserAnswers.map((question) => <Question key={question} id={question} />)}
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
