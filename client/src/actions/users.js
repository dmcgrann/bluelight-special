// post request to signup named userSignup
// post request to login named userLogin
// get reguest to find current named getCurrentUser

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}
