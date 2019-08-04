import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from '../actions/users';
import {updateUserForm} from '../actions/userForms';

const SignupForm = ({ signupUserInfo, updateUserForm, userSignup, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {
      ...signupUserInfo,
      [name]: value
    }
    updateUserForm(updatedFormData)
  }


  const handleSubmit = event => {
    event.preventDefault()
    userSignup(signupUserInfo, history)
  }


  return (
        <form onSubmit={handleSubmit}>
          <h1>Sign Up Form</h1>

          <label>Name</label>
          <input
            name='name'
            value={signupUserInfo.name}
            onChange={handleChange}
            /><br/>

          <label>Email</label>
          <input
            name='email'
            value={signupUserInfo.email}
            onChange={handleChange}
            /><br/>

          <label>Password</label>
          <input
            type='password'
            name='password'
            value={signupUserInfo.password}
            onChange={handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
}

const mapStateToProps = state => {
  return {
    signupUserInfo: state.signupForm
  }
}


 export default connect(mapStateToProps, { updateUserForm, userSignup })(SignupForm);
