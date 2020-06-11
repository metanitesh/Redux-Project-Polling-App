/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';
import {authUser} from '../actions/authUserAction';
import {Redirect} from 'react-router-dom'

class Login extends Component {
  
  state = {
    selectedUser : null
  }


  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      selectedUser: value
    })
  }

  handleSubmit = (e) => {
    this.props.dispatch(authUser(this.state.selectedUser))
  }

  render() {

    const { users, authUser } = this.props;
    
    if(authUser){
      return <Redirect to="/home" />
    }

    
    return (
      <>
      <h3>Select the user</h3>
      <select value={this.state.selectUser} defaultValue ='none' onChange={this.handleChange}>
      <option disabled value='none'> 
          Select an Option 
      </option> 
          {users.map( user => <option key ={user} >{user}</option>)}
      </select>
      <br />
      <button onClick={this.handleSubmit}>Login</button> 
      </>
    )
  }
}


export default connect( ({ users, authUser }) => ({
  users : Object.keys(users),
  authUser
}))(Login);
