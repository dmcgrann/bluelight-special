import React from 'react';
import { connect } from 'react-redux'
import Logout from './users/Logout'

const Footer = ( {currentUser, loggedIn} ) => {
  return (
    <div className="footer">

      { loggedIn ?
        <>
        <p>Logged in as {currentUser.attributes.email}.</p>
        <p>Copyright (c) 2019. All Rights Reserved.</p>
        <Logout />
        </>
         :
        <p>Copyright (c) 2019. All Rights Reserved.</p>
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

export default connect(mapStateToProps)(Footer);
