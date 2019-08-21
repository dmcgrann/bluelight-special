import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/users';

const Logout = ({ logout }) => {

  return(
    <form onSubmit={(event) => {
      event.preventDefault()
      logout()
      }}>
      <p><input className="logout" type="submit" value="Log Out" /></p>
    </form>
  )
}




export default connect(null, { logout })(Logout);
