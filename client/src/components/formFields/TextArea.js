import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap'

const TextArea = props => {
    return (
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text></InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="" {...props}  />
      </InputGroup>
    );
}

export default TextArea;
