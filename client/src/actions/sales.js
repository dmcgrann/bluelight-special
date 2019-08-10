import {clearSaleForm} from './saleForm'

const setCurrentSale = sale => {
  return {
    type: "SET_CURRENT_SALE",
    sale
  }
}

const setEditSale = sale => {
  return {
    type: "SET_EDIT_SALE",
    sale
  }
}

const updateSuccess = () => {
  return {
    type: "UPDATE_SUCCESS",
    redirectAfter: '/'
  }
}

const deletSale = saleId => {
  return {
    type: "DELETE_SALE",
    saleId
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
          alert("You cannot add a sale at this time. Please contact administrator.")
        } else {
          dispatch(setCurrentSale(response.data))
          dispatch(clearSaleForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const editSale = (details, history) => {
  return dispatch => {
    const saleData = {
      address: details.address,
      days: details.days,
      notes: details.notes
    }
    return fetch(`http://localhost:3001/api/v1/sales/${details.saleId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(saleData)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert("You cannot edit this sale. Please contact administrator.")
        } else {
          dispatch(setEditSale(response.data))
          history.push('/sales')
        }
      })
      .catch(console.log)
  }
}

export const deleteSale = (saleId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/sales/${saleId}`,{
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert("You cannot delete this sale. Please contact administrator.")
      } else {
        dispatch(deleteSale(saleId))
        history.push('/')
      }
    })
    .catch(console.log)
  }
}
