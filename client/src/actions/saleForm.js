export const updateSaleForm = (name, value) => {
  const saleInfo = {name,value}
  return {
    type: "UPDATE_SALE_FORM",
    saleInfo
  }
}

export const clearSaleForm = () => {
  return {
    type: "CLEAR_SALE_FORM"
  }
}
