import React from 'react';
import {connect} from 'react-redux';
import {loadEditForm} from '../actions/saleForm';
import {editSale} from '../actions/sales'
import SaleForm from './SaleForm'

class EditSaleForm extends React.Component {

  componentDidMount() {
    this.props.sale && this.props.loadEditForm(this.props.sale)
  }


  render(){

    return (
          <SaleForm />
        )
  }
}

export default connect(null, { editSale, loadEditForm })(EditSaleForm);
