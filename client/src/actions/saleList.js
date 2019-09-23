const setSaleList = sales => {
  return {
    type: "SET_SALE_LIST",
    sales
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
          dispatch(setSaleList(response.data))
        }
      })
      .catch(console.log)
  }
}
