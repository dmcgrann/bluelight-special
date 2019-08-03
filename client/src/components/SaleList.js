import React from 'react';
import { connect } from 'react-redux'


const SaleList = props => {
  const currentSales =
  props.sales.map(sale => (<p key={sale.id}>{sale.attributes.address}</p>))

  return currentSales
}

  const mapStateToProps = state => {
    return {
      sales: state.saleList
    }
  }

  export default connect(mapStateToProps)(SaleList)
