import React from 'react';
import { connect } from 'react-redux'
import {createSale} from '../actions/sales'
import {updateSaleForm} from '../actions/saleForm';

class EditSale extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      sale: this.props.sale.attributes
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }

  handleChange(event) {
    const field = event.target.name;
    const sale = this.state.sale;
    sale[field] = event.target.value;
    return this.setState({sale: sale});
    };

  handleSubmit() {

  }

  render(){
    if (this.state.isEditing) {
      return (
        <div>
        <form >
          <h1>Update Your Garagesale</h1>

          <label>Address</label>
          <input
            name='address'
            value={this.state.sale.address}
            onChange={this.handleChange}
            /><br/>

          <label>Days</label>
          <input
            name='days'
            value={this.state.sale.days}
            onChange={this.handleChange}
            /><br/>

          <label>Notes</label>
          <input
            name='notes'
            value={this.state.sale.notes}
            onChange={this.handleChange}
            /><br/>

          <input type='submit'/>
        </form>
      )
        </div>
      )
    }
    return(
      <div>
      <p>{this.state.sale.address}</p>
      <p>{this.state.sale.days}</p>
      <p>{this.state.sale.notes}</p>

      <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }

}

export default connect(null, { createSale })(EditSale);
