import React from 'react';
import {Form}from 'react-bootstrap'

const EmailInput = props => {
    return (
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" {...props} />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
    );
}

export default EmailInput;
