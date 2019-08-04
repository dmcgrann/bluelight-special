import React from 'react';

const SaleCard = ({sale}) => {
  return (
    <div>
    <p>{sale.attributes.address}</p>
    <p>{sale.attributes.days}</p>
    <p>{sale.attributes.notes}</p>
  )
}

export default SaleCard
