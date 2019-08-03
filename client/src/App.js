import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { getCurrentUser, logout} from './actions/users'
import {getSales} from './actions/saleList'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import SaleList from './components/SaleList'
import NavBar from './components/NavBar'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getSales()
  }

  render(){
    return (
      <Router>
      <div className="app">
        <NavBar />
        <Route exact path="/" />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/sales" component={SaleList} />
      </div>
    </Router>
    );
  }
}

const mapStateToProps = ({ currentUser, saleList }) => {
  return {
    currentUser,
    saleList
  }
}

export default connect(mapStateToProps, {getCurrentUser, getSales, logout}) (App);
