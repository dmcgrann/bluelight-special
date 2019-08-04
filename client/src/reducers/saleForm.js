const initialState = {
  address: "",
  days: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SALE":
    const newValue = {
      ...state,
      [action.saleInfo.name]: action.saleInfo.value
    }
      return newValue
    case "CLEAR_SALE":
      return initialState
    default:
      return state
  }
}
