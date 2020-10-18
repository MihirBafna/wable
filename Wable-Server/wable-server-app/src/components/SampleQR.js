import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import sample from '../img/frame.png'
class SampleQR extends React.Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                    <Col>
                        <img src={sample} style={{ width: "300px", padding: "2vh" }}></img>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default SampleQR