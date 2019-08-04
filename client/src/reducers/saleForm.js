const initialState = {
  address: "",
  days: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SALE":
      return action.userInfo
    case "CLEAR_SALE":
      return initialState
    default:
      return state
  }
}
