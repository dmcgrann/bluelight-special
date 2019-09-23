import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, Form, ListGroup, ListGroupItem} from 'react-bootstrap'
import TextInput from '../../components/formFields/TextInput'
import banner1 from '../../banner1.png'


class SaleList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      search: ''
    }
  }

  handleSearch = event => {
    this.setState({ search: event.target.value.toLowerCase()
    })
  }




  render() {

    const saleSearch = this.props.sales.filter(sale => sale.attributes.address.toLowerCase().includes(this.state.search))
    .map(sale => (<ListGroup><ListGroupItem key={sale.id}><Link to={`/sales/${sale.id}`}>
      {sale.attributes.address}</Link></ListGroupItem></ListGroup>))

     return(
       <>
       <Card>
         <Card.Img variant="top" src={banner1} />
         <Card.Body>
           <ListGroup className="list-group-flush">
             <h1>Current Listings</h1>
             <ListGroupItem>
               <Form>
                 <TextInput
                   name="search"
                   placeholder="Search..."
                   value={this.state.search}
                  onChange={this.handleSearch}
                />
               </Form>
               {saleSearch}
             </ListGroupItem>
           </ListGroup>
          </Card.Body>
       </Card>
       </>
     )
  }
}

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

export default connect(mapStateToProps)(SaleList)
