import React from 'react';
import {connect} from 'react-redux';
import {updateSaleForm} from '../../actions/saleForm';
import TextInput from '../../components/formFields/TextInput'
import TextArea from '../../components/formFields/TextArea'

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

          <TextInput
            name='address'
            placeholder='Address'
            value={address}
            onChange={handleChange}
            /><br/>

          <TextInput
            name='days'
            placeholder='Dates and times.'
            value={days}
            onChange={handleChange}
            /><br/>

          <TextArea
            name='notes'
            placeholder='Add any notes about your sale here...'
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
