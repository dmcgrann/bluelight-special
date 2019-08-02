import React from 'react';
import {connect} from 'react-redux';
import {userSignup} from '../actions/users';
import {updateForm} from '../actions/forms';

const SignupForm = ({ signupUserInfo, updateForm, userSignup }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {
      ...signupUserInfo,
      [name]: value
    }
    updateForm(updatedFormData)
  }


  const handleSubmit = event => {
    event.preventDefault()
    userSignup(signupUserInfo)
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


 export default connect(mapStateToProps, { updateForm, userSignup })(SignupForm);
//
// class SignupForm extends Component {
//   state = {
//     name: "",
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
//     this.props.userSignup(this.state)
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h1>Sign Up Form</h1>
//
//         <label>Name</label>
//         <input
//           name='name'
//           onChange={this.handleChange}
//           /><br/>
//
//         <label>Email</label>
//         <input
//           name='email'
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
//   userPostFetch: userInfo => dispatch(userSignup(userInfo))
// })
//
// export default connect(null, mapDispatchToProps)(SignupForm);
