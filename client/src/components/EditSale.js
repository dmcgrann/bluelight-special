import React from 'react';
import { Link } from 'react-router-dom'

 const EditSaleCard = ({sale}) => {
  return(
    <div>
    <p>{sale.attributes.address}</p>
    <p>{sale.attributes.days}</p>
    <p>{sale.attributes.notes}</p>
    <p><Link to={`/sales/${sale.id}/edit`}>Edit Your Sale</Link></p>
    </div>
  )
}

 export default EditSaleCard
