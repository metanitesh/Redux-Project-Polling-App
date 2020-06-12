import React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveQuestion } from '../actions/questionAction';

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
    const { dispatch } = this.props;
    dispatch(saveQuestion(optionOneText, optionTwoText));
  }

  render() {
    const { optionOneText, optionTwoText } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        option1:
        <input value={optionOneText} name="optionOneText" onChange={this.handleChange} />
        <br />
        option2:
        <input value={optionTwoText} name="optionTwoText" onChange={this.handleChange} />
        <br />
        <button type="submit" onSubmit={this.handleSubmit}>submit</button>
      </form>
    );
  }
}

const mapStateToProps = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProps)(NewQuestion);
