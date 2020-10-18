import React from 'react';
import '../css/OrderFooter.css'
import {Row, Col, Button} from 'reactstrap'
import {
    Link
  } from "react-router-dom";


class OrderFooter extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="footer">
                <Row>
                <Col xs={6}>
                <Button style={{width:"100%"}}outline color="secondary">View Cart</Button>{' '}
                </Col>
                <Col xs={6}>
                    <Link to="/paymentportal"><Button style={{width:"100%"}}outline color="secondary">Pay</Button>{' '}</Link>
                </Col>
                </Row>
            </div>
        );
    }

}

 export default OrderFooter;