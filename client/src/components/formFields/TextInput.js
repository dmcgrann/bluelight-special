import React from 'react';

const TextInput = (props) => {

  const formControl = "form-control";
  
  return (

    <div className="form-group">

      <input type="text" className={formControl} {...props} />

    </div>
  );
}

export default TextInput;
