import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userSignup} from '../actions/users';

class SignupForm extends Component {
  state = {
    name: "",
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
    this.props.userSignup(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up Form</h1>

        <label>Name</label>
        <input
          name='name'
          onChange={this.handleChange}
          /><br/>

        <label>Email</label>
        <input
          name='email'
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
  userPostFetch: userInfo => dispatch(userSignup(userInfo))
})

export default connect(null, mapDispatchToProps)(SignupForm);
