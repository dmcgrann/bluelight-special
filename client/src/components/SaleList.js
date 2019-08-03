import React from 'react';
import { connect } from 'react-redux'


const SaleList = props => {
  const currentSales =
  props.sales.map(sale => (<ul><li key={sale.id}>{sale}</li></ul>)) 

  return currentSales
}

  const mapStateToProps = state => {
    return {
      sales: state.saleList
    }
  }

  export default connect(mapStateToProps)(SaleList)
