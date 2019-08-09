import React from 'react';
import { Link } from 'react-router-dom'

class EditSale extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isEditing: false,
      sale: this.props.sale
    };
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    this.setState({isEditing: !this.state.isEditing})
  }



  render(){
    if (this.state.isEditing) {
      return (
        <div>
        <p>form</p>
        </div>
      )
    }
    return(
      <div>
      <p>{this.state.sale.attributes.address}</p>
      <p>{this.state.sale.attributes.days}</p>
      <p>{this.state.sale.attributes.notes}</p>

      <button onClick={this.toggleEdit}>edit</button>
      </div>
    )
  }


}

export default EditSale
