const initialState = {
  name: "",
  email: "",
  password: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_FORM":
      return action.userInfo
    case "CLEAR_FORM":
      return initialState
    default:
      return state
  }
}