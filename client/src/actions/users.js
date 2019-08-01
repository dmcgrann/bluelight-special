// post request to signup named userSignup
// post request to login named userLogin
// get reguest to find current named getCurrentUser

const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}


export const userLogin = user => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))

        }
      })
      .catch(console.log)
  }
}
