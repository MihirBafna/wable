import React from 'react';
import back from '../img/back_circle.svg';
import next from '../img/next_circle.svg';
import { InputGroup, InputGroupText, Input } from 'reactstrap';
import {Row, Col } from 'reactstrap';
import MenuDropdown from './MenuDropdown'

class Quantity extends React.Component{
    constructor(props){
        super(props)
        this.state ={quantity:0}
        this.currQty = React.createRef();
    }


    render(){
        return(
            <Col xs="1">
                
                <MenuDropdown ref={this.currQty} itemDrop = "yes" options={[1,2,3,4,5,6,7,8,9,10]} />
            </Col>

        )
    }
}

export default Quantity;