import React from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';
import Cart from './Cart'
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default function PaymentPortal() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs();

  return (
      <div>
      <h2>Your cart</h2>      
      <Cart />
      <h2>Payment</h2>
      <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input type="name" name="name" id="firstname" placeholder="John" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Password</Label>
            <Input type="name" name="name" id="lastname" placeholder="Doe" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" name="email" id="email" placeholder="example@email.com"></Input>
          </FormGroup>
        </Col>
      </Row>
    <Row>
      <Col md={3}>
    <PaymentInputsWrapper {...wrapperProps}>
      <svg {...getCardImageProps({ images })} />
      <input {...getCardNumberProps()} />
      <input {...getExpiryDateProps()} />
      <input {...getCVCProps()} />
    </PaymentInputsWrapper>
    </Col>
    <Col md={1}>
      
    </Col>
    <Col md={1}>
      <Button style={{backgroundColor:"#5DB2B2"}}>Submit</Button>
    </Col>
    </Row>
    </Form>

    </div>
  );
}