import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap'


const TextInput = props => {
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text></InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder=""
        aria-label=""
        {...props}
      />
   </InputGroup>
  );
}

export default TextInput;
