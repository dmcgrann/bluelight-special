import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../actions/users';

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Email</label>
        <input
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLogin(userInfo))
})

export default connect(null, mapDispatchToProps)(LoginForm);
