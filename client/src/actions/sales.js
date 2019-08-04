import {clearSaleForm} from './saleForm'

const setCurrentSale = sale => {
  return {
    type: "SET_CURRENT_SALE",
    sale
  }
}

export const createSale = (details, history) => {
  return dispatch => {
    const saleData = {
      address: details.address,
      days: details.days,
      notes: details.notes,
      user_id: details.userId
    }
    return fetch("http://localhost:3001/api/v1/sales", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(saleData)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentSale(response.data))
          dispatch(clearSaleForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}