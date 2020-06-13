import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { saveQuestion } from '../actions/questionAction';
import Nav from './Nav';


class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, history } = this.props;
    dispatch(saveQuestion(optionOneText, optionTwoText));
    history.push('/home');
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;
    const { authUser } = this.props;
    return (
      <>
        <Nav />
        <div className=" p-3 poll-container  ">
          <div className="p-4 card w75 text-center">
            <form onSubmit={this.handleSubmit} className="center">
              <h4 className="poll-header text-center">
                {authUser}
                ,

                {' '}
                Create a new Question ?
              </h4>

              <b>option1:</b>
              <input className=" m-3" value={optionOneText} name="optionOneText" onChange={this.handleChange} />
              <br />
              <b>option2:</b>
              <input className=" m-3" value={optionTwoText} name="optionTwoText" onChange={this.handleChange} />
              <br />
              <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary center">submit</button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default withRouter(connect(mapStateToProps)(NewQuestion));
