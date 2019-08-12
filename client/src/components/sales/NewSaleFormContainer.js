import React from 'react';
import SaleForm from './SaleForm'
import {connect} from 'react-redux';
import {createSale} from '../../actions/sales'

const NewSaleFormContainer = ({ createSale, history }) => {

  const handleSubmit = (saleInfo, userId) => {
    createSale({
      ...saleInfo,
      userId
    }, history)
  }
  return <SaleForm handleSubmit={handleSubmit}/>
}


 export default connect(null, { createSale })(NewSaleFormContainer);
