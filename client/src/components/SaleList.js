import React from 'react';
import { connect } from 'react-redux'

class SaleList extends React.Component {

   render() {
     return(

       this.props.saleList.map(sale => (<p key={sale.id}>{sale.attributes.address}</p>))


     )
   }


}


const mapStateToProps = ({ saleList }) => {
  return {
    saleList
  }
}

  export default connect(mapStateToProps)(SaleList)
