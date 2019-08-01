// post request to signup named userSignup
// post request to login named userLogin
// get reguest to find current named getCurrentUser

const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


export const userLogin = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
  }
}
