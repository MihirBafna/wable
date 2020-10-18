import React from 'react';
import TableView from './TableView';
import { Container, Row, Col } from 'reactstrap';
import WaiterStatistics from './WaiterStatistics';

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
                        <WaiterStatistics totalseats="25"/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainView;