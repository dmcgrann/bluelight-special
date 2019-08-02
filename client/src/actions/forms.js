export const updateForm = userInfo => {
  return {
    type: "UPDATE_FORM",
    userInfo
  }
}

export const clearForm = () => {
  return {
    type: "CLEAR_FORM"
  }
}
