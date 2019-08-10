const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_SALE_LIST":
      return action.sales
    case "SET_EDIT_SALE":
        return state.map(sale => sale.id === action.sale.id ? action.sale : sale)
    case 'DELETE_SALE':
      return state.filter(sale => sale.id === action.saleId ? false : true)
    default:
      return state;
  }
}
