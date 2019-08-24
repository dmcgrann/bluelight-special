import React from 'react';
import {connect} from 'react-redux';
import {updateSaleForm} from '../../actions/saleForm';
import TextInput from '../../components/formFields/TextInput'
import TextArea from '../../components/formFields/TextArea'
import {Form, Button}from 'react-bootstrap'


const SaleForm = ({ saleInfo, updateSaleForm, handleSubmit, history, userId, sale }) => {

  const { address, days, notes } = saleInfo

  const handleChange = event => {
    const { name, value } = event.target
    updateSaleForm(name,value)
  }

  return (
        <Form className="form" onSubmit={event => {
            event.preventDefault()
            handleSubmit(saleInfo)}
          }>

          <TextInput
            name='address'
            placeholder='Address (e.g. 123 Main St MyTown MI 12345)'
            aria-label="test"
            value={address}
            onChange={handleChange}
            />


          <TextInput
            name='days'
            placeholder='Dates and times.'
            value={days}
            onChange={handleChange}
            />

          <TextArea
            name='notes'
            placeholder='Add any notes about your sale here...'
            value={notes}
            onChange={handleChange}
            /><br/>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br/>
        </Form>
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
