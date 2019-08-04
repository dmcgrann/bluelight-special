import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import Logout from './Logout'

const NavBar = ( {currentUser, loggedIn} ) => {
  return (
    <div className="navbar">

      { loggedIn ?
        <>
        <p>Hi, {currentUser.attributes.email}!</p>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/sales">Sales</NavLink>
        <NavLink to="/logout">Logout</NavLink>
        </>
         :
        <>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        </>
          }
    </div>
  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
