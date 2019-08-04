const initialState = {
  address: "",
  days: "",
  notes: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SALE_FORM":
    const newValue = {
      ...state,
      [action.saleInfo.name]: action.saleInfo.value
    }
      return newValue
    case "CLEAR_SALE_FORM":
      return initialState
    default:
      return state
  }
}
