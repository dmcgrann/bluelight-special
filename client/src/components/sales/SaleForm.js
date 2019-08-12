import React from 'react';
import {connect} from 'react-redux';
import {updateSaleForm} from '../../actions/saleForm';

const SaleForm = ({ saleInfo, updateSaleForm, handleSubmit, history, userId, sale }) => {

  const { address, days, notes } = saleInfo

  const handleChange = event => {
    const { name, value } = event.target
    updateSaleForm(name,value)
  }

  return (
        <form onSubmit={event => {
            event.preventDefault()
            handleSubmit(saleInfo)}
          }>
          <h1>Enter Your Garagesale Info</h1>

          <label>Address</label>
          <input
            name='address'
            value={address}
            onChange={handleChange}
            /><br/>

          <label>Days</label>
          <input
            name='days'
            value={days}
            onChange={handleChange}
            /><br/>

          <label>Notes</label>
          <input
            name='notes'
            value={notes}
            onChange={handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : null
  return {
    saleInfo: state.saleForm,
    userId
  }
}


 export default connect(mapStateToProps, { updateSaleForm })(SaleForm);
