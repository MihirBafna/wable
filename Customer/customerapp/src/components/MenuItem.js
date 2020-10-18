import React, { useState } from 'react'
import MenuDropdown from './MenuDropdown'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter,} from 'reactstrap';
import '../css/MenuItem.css'
import Quantity from './Quantity'
import ModalExample from './Modal'
import { toggle, buttonLabel, modal, className} from 'react'
import AddCart from './AddCart'

class MenuItem extends React.Component{
    constructor(props){
        super(props);

    }
    
    render(){

        return(
            <Container fluid>

            <Row style={{paddingTop:"5vh"}}>
                <Col xs={2}>
                <Row>
                <Col><p>{this.props.name}</p>
                </Col>
                <Col>
                <MenuDropdown itemDrop={this.props.dropdown || {dropdown:"no"}} options={this.props.options || {options:['']} }>
                </MenuDropdown>
                
                </Col>
                </Row>
                </Col>
                
                <Col xs={3}> <p>{this.props.desc}
                <div>
                    <Button color="danger" onClick={toggle}>{"Description"}</Button>
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
                
                
                </p></Col>
                <Col id="price"><h5>{this.props.price}</h5></Col>
                <Quantity />
                <Col xs={1}>
                <AddCart price={this.props.price}/>
                </Col>
            </Row> 
            </Container>
        );
        }
}

export default MenuItem;
