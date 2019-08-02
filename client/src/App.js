import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser, logout} from './actions/users'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (


        this.props.currentUser ? <Logout/> : <LoginForm/>


    );
  }
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser, logout}) (App);
