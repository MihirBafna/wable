import React from 'react';
import TableView from './TableView';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

class MainView extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className=" col-9" >
                        <center><h1 style={{ paddingTop: "2vh", fontWeight:"200"}}>Table View</h1></center>
                        <hr className="my-2" style={{ height:"5"}}/>
                        <TableView rows="5" cols="5"/>
                    </Col>
                    <Col className="col-3">
                        <div style={{ height: "100vh", backgroundColor:"#E9ECEF"}}>
                            <center><h1 style={{ paddingTop: "2vh", fontWeight: "200" }}>Statistics</h1></center>
                            <hr className="my-2" />
                            <p style={{ padding:"2vh"}}>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <p className="lead" style={{ padding: "2vh" }}>
                                <Button color="primary">Learn More</Button>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainView;