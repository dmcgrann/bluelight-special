export const updateSale = saleInfo => {
  return {
    type: "UPDATE_SALE",
    saleInfo
  }
}

export const clearSale = () => {
  return {
    type: "CLEAR_SALE"
  }
}
