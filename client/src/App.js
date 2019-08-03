import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser, logout} from './actions/users'
import {getSales} from './actions/saleList'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import SaleList from './components/SaleList'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getSales()
  }

  render(){
    return (
      <div>
        <SaleList />
        <LoginForm/>
        </div>
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
