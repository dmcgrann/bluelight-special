import React from 'react';
import {connect} from 'react-redux';
import {loadEditForm, clearSaleForm} from '../../actions/saleForm';
import {editSale, deleteSale} from '../../actions/sales'
import SaleForm from './SaleForm'
import {Button}from 'react-bootstrap'

class EditSaleFormContainer extends React.Component {

  componentDidMount() {
    this.props.sale && this.props.loadEditForm(this.props.sale)
  }

  handleSubmit = (saleInfo) => {
    const {sale, editSale, history} = this.props
    editSale({
      ...saleInfo,
      saleId: sale.id
    }, history)
  }

  render(){
    const {sale, deleteSale, history} = this.props
    const saleId = sale ? sale.id : null
    return (
      <>
      <h1 className="sale-form-header">Update Your Garagesale</h1>
      <SaleForm handleSubmit={this.handleSubmit} />
      <Button variant="primary"
        className="delete-button"
        type="submit"
        onClick={()=>deleteSale(saleId, history)}>
          Delete
      </Button>
      </>
    )
  }
}

export default connect(null, { editSale, loadEditForm, clearSaleForm, deleteSale })(EditSaleFormContainer);
