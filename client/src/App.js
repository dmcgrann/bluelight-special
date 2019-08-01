import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm.js'
// import SignupForm from './components/SignupForm.js'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <LoginForm/>
      </div>
    );
  }
}



export default App;
