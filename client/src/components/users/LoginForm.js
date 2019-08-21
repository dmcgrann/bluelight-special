import React from 'react';
import userForms from './userForms.css'
import {connect} from 'react-redux';
import {userLogin} from '../../actions/users';
import {updateUserForm} from '../../actions/userForms';
import EmailInput from '../../components/formFields/EmailInput'
import PasswordInput from '../../components/formFields/PasswordInput'
import {Form, Button}from 'react-bootstrap'


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

    <Form className="form" onSubmit={handleSubmit}>
            <h1>Login</h1>

            <EmailInput
              name='email'
              placeholder='Email'
              value={loginUserInfo.email}
              onChange={handleChange}
              />

            <PasswordInput
              name='password'
              placeholder='Password'
              value={loginUserInfo.password}
              onChange={handleChange}
              />

            <Button variant="primary" type="submit">
              Login
            </Button>

          </Form>

        )
    }


const mapStateToProps = state => {
  return {
    loginUserInfo: state.loginForm
  }
}


export default connect(mapStateToProps, { updateUserForm, userLogin })(LoginForm);
