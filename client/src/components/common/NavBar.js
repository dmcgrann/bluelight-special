import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const NavBar = ( {currentUser, loggedIn} ) => {
  return (
    <div className="navbar" id="menuToggle">

      { loggedIn ?
        <>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/sales">Sales</NavLink>
        <NavLink to="/sales/new">Sale Form</NavLink>
        <NavLink to="/map">Map View</NavLink>

        </>
         :
        <>
        <NavLink to="/sales">Sales</NavLink>
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