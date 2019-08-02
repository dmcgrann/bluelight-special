import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js';
import { connect } from 'react-redux';
import { getCurrentUser} from './actions/users.js'
import SignupForm from './components/SignupForm.js'

class App extends React.Component {

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">

        <LoginForm/>

      </div>
    );
  }
}



export default connect(null, {getCurrentUser}) (App);
