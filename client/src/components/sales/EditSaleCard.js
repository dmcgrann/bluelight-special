import React from 'react';
import { Link } from 'react-router-dom'
import {Card, ListGroup, ListGroupItem, Button} from 'react-bootstrap'
import banner1 from '../../banner1.png'

 const EditSaleCard = ({sale}) => {
  return(
    <Card>
      <Card.Img variant="top" src={banner1} />
      <Card.Body>
        <h1>Sale Info</h1>
        <ListGroup className="list-group-flush">
          <ListGroupItem><label className="list-group-label">Address:</label> {sale.attributes.address}</ListGroupItem>
          <ListGroupItem><label className="list-group-label">Days:</label> {sale.attributes.days}</ListGroupItem>
          <ListGroupItem><label className="list-group-label">Notes:</label> {sale.attributes.notes}</ListGroupItem>
        </ListGroup>
        <Link to={`/sales/${sale.id}/edit`}><Button variant="primary" type="submit" className="edit-button">Edit Sale</Button></Link>
      </Card.Body>
    </Card>
  )
}

export default EditSaleCard
