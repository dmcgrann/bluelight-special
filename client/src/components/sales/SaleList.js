import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SaleList = props => {
  const currentSales = props.sales != null ?
  props.sales.map(sale => (<ul><li key={sale.id}><Link to={`/sales/${sale.id}`}>{sale.attributes.address}</Link></li></ul>)) :
  <p>"There are not any current sales."</p>


   return currentSales
}

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

  export default connect(mapStateToProps)(SaleList)
