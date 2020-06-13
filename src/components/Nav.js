import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { unAuthUser } from '../actions/authUserAction';

class Nav extends Component {
  logout = () => {
    console.log('logout');
    const { dispatch } = this.props;
    dispatch(unAuthUser());
  }

  render() {
    const { authUser } = this.props;
    if (!authUser) {
      return <Redirect to="/" />;
    }

    return (
      <div className="navbar border">
        <ul className="nav ">
          <li className="mr-3"><Link to="/"> Home</Link></li>
          <li className="mr-3"><Link className="nav-item" to="/leaderboard"> Leader Board</Link></li>
          <li className="mr-3"><Link className="nav-item" to="/new-question"> New question </Link></li>
        </ul>
        <div className="auth">
          <h5 className="nav-item" href="#">
            <span className="mr-3">Hello {authUser}</span> 
            <button className="nav-item " type="button" onClick={this.logout}>Log Out</button>
          </h5>
        </div>
      </div>
      // <div className='class="navbar navbar-light bg-light"'>
      //   <h3>Hello {authUser}</h3>
      //   <Link to="/"> Home</Link>
      //   <Link to="/leaderboard"> Leader Board</Link>
      //   <Link to="/new-question"> New question </Link>
      //   <button type="button" onClick={this.logout}>Log Out</button>
      // </div>
    );
  }
}

const mapStateToProp = ({ authUser }) => ({
  authUser,
});

export default connect(mapStateToProp)(Nav);
