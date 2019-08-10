import React from 'react';
import {connect} from 'react-redux';
import {loadEditForm, clearSaleForm} from '../actions/saleForm';
import {editSale, deleteSale} from '../actions/sales'
import SaleForm from './SaleForm'

class EditSaleForm extends React.Component {

  componentDidMount() {
    this.props.sale && this.props.loadEditForm(this.props.sale)
  }

  componentDidUpdate(prevProps){
    this.props.sale && !prevProps.sale && this.props.loadEditForm(this.props.sale)
  }

  componentWillUnmount(){
    this.props.clearSaleForm()
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
          <SaleForm handleSubmit={this.handleSubmit} />

        <p><button onClick={()=>deleteSale(saleId, history)}>Delete</button></p>
      </>

        )
  }
}

export default connect(null, { editSale, loadEditForm, clearSaleForm, deleteSale })(EditSaleForm);
