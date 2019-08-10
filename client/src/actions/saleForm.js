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

export const loadEditForm = sale =>{
  const saleInfo = {
    address: sale.attributes.address,
    days: sale.attributes.days,
    notes: sale.attributes.notes
  }
  return {
    type: "LOAD_EDIT_FORM",
    saleInfo
  }
}
