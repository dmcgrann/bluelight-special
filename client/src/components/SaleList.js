import React from 'react';
import { connect } from 'react-redux'



class SaleList extends React.Component {


  render(){
    return (

      <div></div>

    );
  }

}


  const mapStateToProps = state => {
    return {
      sales: state.saleList
    }
  }

  export default connect(mapStateToProps)(SaleList)
