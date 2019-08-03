import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser, logout} from './actions/users'
import { getSales } from './actions/saleList'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import SaleList from './components/SaleList'

class App extends React.Component {

  componentDidMount(){
    this.props.getSales()
  }

  render(){
    return (

        <SaleList />



    );
  }
}

const mapStateToProps = ({ currentSales }) => {
  return {
    currentSales
  }
}

export default connect(mapStateToProps, {getSales}) (App);
