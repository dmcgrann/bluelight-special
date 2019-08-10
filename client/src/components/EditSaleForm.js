import React from 'react';
import {connect} from 'react-redux';
import {loadEditForm} from '../actions/saleForm';
import {editSale} from '../actions/sales'
import SaleForm from './SaleForm'

class EditSaleForm extends React.Component {

  componentDidMount() {
    this.props.sale && this.props.loadEditForm(this.props.sale)
  }

  componentWillRecieveProps(nextProps){
    this.props.sale && nextProps.sale && this.props.loadEditForm(this.props.sale)
  }


  handleSubmit = (saleInfo) => {
    const {sale, editSale, history} = this.props
    editSale({
      ...saleInfo,
      saleId: sale.id
    }, history)
  }

  render(){
    const {sale} = this.props
    return (
          <SaleForm handleSubmit={this.handleSubmit} />
        )
  }
}

export default connect(null, { editSale, loadEditForm })(EditSaleForm);
