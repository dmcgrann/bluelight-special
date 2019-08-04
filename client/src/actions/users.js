import {clearUserForm} from './userForms'

const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

const logoutUser = user => {
  return {
    type: "LOGOUT_USER"
  }
}

export const userSignup = (identification, history) => {
  const userData = {
    user: identification
  }
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(clearUserForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const userLogin = (user, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(clearUserForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/current_user", {
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
          dispatch(setCurrentUser(response.data))

        }
      })
      .catch(console.log)
  }
}

export const logout = event => {
  return dispatch => {
    dispatch(logoutUser())
    return fetch("http://localhost:3001/api/v1/logout",{
      credentials: "include",
      method: "DELETE"
    })
  }
}
