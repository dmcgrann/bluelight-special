import React from 'react';



const EditSale = ({sale}) => {
  return(
    <div>
    <p>{sale.attributes.address}</p>
    <p>{sale.attributes.days}</p>
    <p>{sale.attributes.notes}</p>
    
    <>
    <button>Edit Sale</button>
    </>
    </div>
  )
}

export default EditSale
