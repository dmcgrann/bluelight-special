export const updateUserForm = userInfo => {
  return {
    type: "UPDATE_USER_FORM",
    userInfo
  }
}

export const clearUserForm = () => {
  return {
    type: "CLEAR_USER_FORM"
  }
}
