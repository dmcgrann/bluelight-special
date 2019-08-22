import React from 'react';
import {Form}from 'react-bootstrap'

const PasswordInput = props => {
    return (

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...props} />
        </Form.Group>
    );
}

export default PasswordInput;
