import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Nav from './Nav';
import Question from './QuestionOutline';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  state = {
    active: 'newQuestions',
  }

  handleChange = (event) => {
    const { name } = event.target;
    this.setState({
      active: name,
    });
  }

  render() {
    const { questions, users, authUser } = this.props;
    const { active } = this.state;

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
      authUserAnswers = questions.filter((question) => authUserAnswers.includes(question));
    } else {
      loading = true;
    }

    if (loading) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <Nav />
        <div className="mt-5">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button className={active === 'newQuestions' ? 'nav-link active' : 'nav-link'} type="button" name="newQuestions" onClick={this.handleChange}>New Qeustions</button>
              {/* <a  onClick={this.handleChange}>Active</a> */}
            </li>
            <li className="nav-item">
              <button className={active === 'answeredQuestions' ? 'nav-link active' : 'nav-link'} type="button" name="answeredQuestions" onClick={this.handleChange}>Answered Qeustions</button>
            </li>


          </ul>
          {active === 'newQuestions' && (
          <div>
            {newQuestions.map((question) => <Question key={question} id={question} type="new" />)}
          </div>
          )}
          {active === 'answeredQuestions' && (
            <div>
              {authUserAnswers.map((question) => <Question key={question} id={question} type="answered" />)}
            </div>
          )}

        </div>
      </div>
    );
  }
}

const mapStateToProp = ({ questions, users, authUser }) => ({
  questions: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
  users,
  authUser,
});


export default connect(mapStateToProp)(Home);
