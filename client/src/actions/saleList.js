const setCurrentSales = sale => {
  return {
    type: "SET_SALES_LIST",
    sale
  }
}


export const getSales = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/sales", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentSales(response.data))
        }
      })
      .catch(console.log)
  }
}
