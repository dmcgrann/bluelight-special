import React from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/users';
import {updateUserForm} from '../../actions/userForms';

const LoginForm = ({ loginUserInfo, updateUserForm, userLogin, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {
      ...loginUserInfo,
      [name]: value
    }
    updateUserForm(updatedFormData)
  }


  const handleSubmit = event => {
    event.preventDefault()
    userLogin(loginUserInfo, history)
  }


  return (
    <form onSubmit={handleSubmit}>
            <h1>Login</h1>

            <label>Email</label>
            <input
              name='email'
              value={loginUserInfo.email}
              onChange={handleChange}
              /><br/>

            <label>Password</label>
            <input
              type='password'
              name='password'
              value={loginUserInfo.password}
              onChange={handleChange}
              /><br/>

            <input type='submit'/>
          </form>

        )
    }


const mapStateToProps = state => {
  return {
    loginUserInfo: state.loginForm
  }
}


export default connect(mapStateToProps, { updateUserForm, userLogin })(LoginForm);
