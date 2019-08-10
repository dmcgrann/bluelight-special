import React from 'react';
import {connect} from 'react-redux';
import {updateSaleForm, loadEditForm} from '../actions/saleForm';
import {editSale} from '../actions/sales'

class EditSaleForm extends React.Component {

  render(){
    return (
          <p>content</p>)
  }
}

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : null
  return {
    saleInfo: state.saleForm,
    userId
  }
}

 export default connect(mapStateToProps, { updateSaleForm, editSale })(EditSaleForm);
