import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import {getSales} from './actions/saleList'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import SaleList from './components/SaleList'
import NavBar from './components/NavBar'

class App extends React.Component {

  componentDidMount(){
    this.props.getSales()
  }

  render(){
    return (
      <Switch>
      <>
        <NavBar />
        <Route exact path="/" />
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/sales" component={SaleList} />
      </>
    </Switch>
    );
  }
}

const mapStateToProps = ({ saleList }) => {
  return {
    saleList
  }
}

export default withRouter(connect(mapStateToProps, { getSales })(App));
