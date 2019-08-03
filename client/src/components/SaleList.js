import React from 'react';
import { connect } from 'react-redux'
import { getSales } from '../actions/saleList'

class SaleList extends React.Component {

   render() {
     return(
       this.props.saleList != null ?
       this.props.saleList.map(sale => (<p key={sale.id}>{sale.attributes.address}</p>)) :
       "Please login"
     )
   }


}


const mapStateToProps = ({ saleList }) => {
  return {
    saleList
  }
}

  export default connect(mapStateToProps)(SaleList)
