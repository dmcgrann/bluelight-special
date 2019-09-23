import React from 'react';
import { connect } from 'react-redux'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Logout from '../../components/users/Logout'


const NavBar = ( {currentUser, loggedIn} ) => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">BlueLight Special</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">

            { loggedIn ?
              <>

              <Nav.Link href="/sales">Sales</Nav.Link>
              <Nav.Link href="/sales/new">Sale Form</Nav.Link>
              <Nav.Link href="/map">Map View</Nav.Link>
                <NavDropdown title={"Hello, " + currentUser.attributes.name +"!"} id="collasible-nav-dropdown">
                  <NavDropdown.Divider />
                <NavDropdown.Item hid="logout" href='/logout'><Logout /></NavDropdown.Item>
              </NavDropdown>

              </>
               :
              <>
              <Nav.Link href="/sales">Sales</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/signup">Signup</Nav.Link>
              </>
            }

      </Navbar.Collapse>
    </Navbar>

  );
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
