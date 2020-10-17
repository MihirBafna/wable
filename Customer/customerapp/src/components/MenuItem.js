import React from 'react'
import MenuDropdown from './MenuDropdown'
import { Container, Row, Col } from 'reactstrap';
import '../css/MenuItem.css'

class MenuItem extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Container fluid>

            <Row style={{paddingTop:"5vh"}}>
                <Col><h2>{this.props.name}</h2>
                
                </Col>
                <Col>
                <MenuDropdown itemDrop={this.props.dropdown || {dropdown:"no"}} options={this.props.options || {options:['']} }/>
                </Col>
                <Col> <p>{this.props.desc}</p></Col>
                <Col id="price"><h5>{this.props.price}</h5></Col>
            </Row> 
            </Container>
        )

    }
}

export default MenuItem;