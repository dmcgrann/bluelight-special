import React from 'react';
import { connect } from 'react-redux'

const Footer = ( {currentUser, loggedIn} ) => {
  return (
    <div className="footer">

      { loggedIn ?
        <>
        <p id="footertext">Logged in as {currentUser.attributes.email}.</p>
        <p>Copyright (c) 2019. All Rights Reserved.</p>

        </>
         :
        <p id="footertext">Copyright (c) 2019. All Rights Reserved.</p>
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
