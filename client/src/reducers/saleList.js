export default (state = null, action) => {
  switch (action.type) {
    case "SET_SALE_LIST":
      return action.sales

    default:
      return state;
  }
}
