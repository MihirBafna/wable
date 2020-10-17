import React from 'react';
import TableView from './TableView';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

class MainView extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className=" col-9" >
                        <TableView rows="3" cols="3"/>
                    </Col>
                    <Col className="col-3 height-auto">
                        <div style={{height:"100vh"}}>
                            <Jumbotron style={{ height: "100%", width:"100%" }}>
                                <h1 className="display-3">Hello, world!</h1>
                                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                                <hr className="my-2" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <Button color="primary">Learn More</Button>
                                </p>
                            </Jumbotron>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainView;