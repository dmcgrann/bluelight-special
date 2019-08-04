import React from 'react';
import {connect} from 'react-redux';
import {createSale, updateSale} from '../actions/sales';

const SaleForm = ({ newSaleInfo, updateForm, createSale, history }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormData = {
      ...newSaleInfo,
      [name]: value
    }
    updateForm(updatedFormData)
  }


  const handleSubmit = event => {
    event.preventDefault()
    createSale(newSaleInfo, history)
  }


  return (
        <form onSubmit={handleSubmit}>
          <h1>Enter Your Garagesale Info</h1>

          <label>Name</label>
          <input
            name='address'
            value={newSaleInfo.address}
            onChange={handleChange}
            /><br/>

          <label>Days</label>
          <input
            name='days'
            value={newSaleInfo.days}
            onChange={handleChange}
            /><br/>

          <label>Notes</label>
          <input
            name='notes'
            value={newSaleInfo.notes}
            onChange={handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
}

const mapStateToProps = state => {
  return {
    newSaleInfo: state.saleForm
  }
}


 export default connect(mapStateToProps, { updateForm, createSale })(SaleForm);
