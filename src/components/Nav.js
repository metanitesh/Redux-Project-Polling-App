import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {unAuthUser} from '../actions/authUserAction';

class Nav extends Component {
  
  logout = () => {
    this.props.dispatch(unAuthUser());
  }

  render() {
    
    if(!this.props.authUser){
      return <Redirect to="/" />
    }

    return (
      <div>
        <button onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

const  mapStateToProp = ({authUser}) => ({
  authUser
})

export default  connect(mapStateToProp)(Nav);
