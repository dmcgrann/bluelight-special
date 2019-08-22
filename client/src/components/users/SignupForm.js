import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from '../../actions/users';
import {updateUserForm} from '../../actions/userForms';
import TextInput from '../../components/formFields/TextInput'
import EmailInput from '../../components/formFields/EmailInput'
import PasswordInput from '../../components/formFields/PasswordInput'
import {Form, Button}from 'react-bootstrap'


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
        <Form className="form" onSubmit={handleSubmit}>
          <h1>Create an Account</h1>

          <TextInput
            name='name'
            placeholder="Name"
            value={signupUserInfo.name}
            onChange={handleChange}
            /><br/>

          <EmailInput
            name='email'
            placeholder='Email'
            value={signupUserInfo.email}
            onChange={handleChange}
            /><br/>

          <PasswordInput
            name='password'
            placeholder='Password'
            value={signupUserInfo.password}
            onChange={handleChange}
            />
          <p>*Passwords must be 6-20 characters in length.</p>

            <Button variant="primary" type="submit">
              Signup
            </Button>
        </Form>
      )
}

const mapStateToProps = state => {
  return {
    signupUserInfo: state.signupForm
  }
}


 export default connect(mapStateToProps, { updateUserForm, userSignup })(SignupForm);
