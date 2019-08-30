import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import banner1 from '../../banner1.png'


class SaleList extends React.Component {
  constructor(props) {
    super()
    this.state = {
      votes: 0

    }
  }

  upVote = () => {

    console.log("i was clicked")
    this.setState((prevState, {votes}) => ({
      votes: prevState.votes + 1
    }))

  }



  render() {
    const currentSales = this.props.sales != null ?
    this.props.sales.map(sale => (<ListGroup><ListGroupItem key={sale.id}><Link to={`/sales/${sale.id}`}>{sale.attributes.address}</Link> <button onClick={this.upVote}>Vote</button><span>{this.state.votes}</span></ListGroupItem></ListGroup>)) :
    <p>"There are not any current sales."</p>


     return(
       <Card>
         <Card.Img variant="top" src={banner1} />
         <Card.Body>
           <ListGroup className="list-group-flush">
             <h1>Current Listings</h1>
             <ListGroupItem>
               {currentSales}
             </ListGroupItem>
           </ListGroup>
          </Card.Body>
       </Card>

     )
  }
}

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

  export default connect(mapStateToProps)(SaleList)
