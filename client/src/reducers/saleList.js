const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {

    case 'SET_SALES_LIST':
        return action.sales

    default:
      return state;
  }
}
