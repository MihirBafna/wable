import React from 'react'
import MenuDropdown from './MenuDropdown'
import { Container, Row, Col } from 'reactstrap';
import '../css/MenuItem.css'
import Quantity from './Quantity'

class MenuItem extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Container fluid>

            <Row style={{paddingTop:"5vh"}}>
                <Col><p>{this.props.name}</p>
                
                </Col>
                <Col>
                <MenuDropdown itemDrop={this.props.dropdown || {dropdown:"no"}} options={this.props.options || {options:['']} }>
                </MenuDropdown>
                
                </Col>
                <Col> <p>{this.props.desc}</p></Col>
                <Col id="price"><h5>{this.props.price}</h5></Col>
                <Quantity />
            </Row> 
            </Container>
        )

    }
}

export default MenuItem;