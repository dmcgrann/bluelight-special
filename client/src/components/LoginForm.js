import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../actions/users';
import {updateLogin} from '../actions/login';

const LoginForm = ({ email, password, updateLogin, userLogin }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {
      ...loginFormData,
      [name]: value
    }
    updateLogin(updatedFormData)
  }


  const handleSubmit = event => {
    event.preventDefault()
    userLogin(loginFormData)
  }


  return (
    <form onSubmit={this.handleSubmit}>
            <h1>Login</h1>

            <label>Email</label>
            <input
              name='email'
              value={loginFormData.email}
              onChange={this.handleChange}
              /><br/>

            <label>Password</label>
            <input
              type='password'
              name='password'
              value={loginFormData.password}
              onChange={this.handleChange}
              /><br/>

            <input type='submit'/>
          </form>

  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLogin, userLogin })(LoginForm);

// class LoginForm extends Component {
//   state = {
//     email: "",
//     password: ""
//   }
//
//   handleChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }
//
//   handleSubmit = event => {
//     event.preventDefault()
//     this.props.userLogin(this.state)
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h1>Login</h1>
//
//         <label>Email</label>
//         <input
//           name='email'
//           value={this.state.email}
//           onChange={this.handleChange}
//           /><br/>
//
//         <label>Password</label>
//         <input
//           type='password'
//           name='password'
//           value={this.state.password}
//           onChange={this.handleChange}
//           /><br/>
//
//         <input type='submit'/>
//       </form>
//     )
//   }
// }
//
// const mapDispatchToProps = dispatch => ({
//   userLoginFetch: userInfo => dispatch(userLogin(userInfo))
// })
//
// export default connect(null, mapDispatchToProps)(LoginForm);
