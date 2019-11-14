const SaleList = props => {
  const currentSales = props.sales != null ?
  props.sales.map(sale => (<ListGroup><ListGroupItem key={sale.id}><Link to={`/sales/${sale.id}`}>{sale.attributes.address}</Link></ListGroupItem></ListGroup>)) :
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

const mapStateToProps = state => {
  return {
    sales: state.saleList
  }
}

  export default connect(mapStateToProps)(SaleList)
