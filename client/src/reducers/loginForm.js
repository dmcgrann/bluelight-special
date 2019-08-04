const initialState = {
  email: "",
  password: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_FORM":
      return action.userInfo
    case "CLEAR_USER_FORM":
      return initialState
    default:
      return state
  }
}
