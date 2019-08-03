import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/logout">Logout</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/sales">Sales</NavLink>
    </div>
  );
};

export default NavBar;