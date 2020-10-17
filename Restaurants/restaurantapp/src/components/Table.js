import React from 'react'
import { Container, Row, Col} from 'reactstrap';
import seat from '../img/seat.svg'
import table from '../img/table.svg'


class Table extends React.Component {
    render() {
        return (
            <Container style={{ width: "7vw" }}>
                <Row  >
                    <Col >
                        <center> <img src={seat} className="App-logo"  alt="logo"
                            style={{width:"1.25vw"}} /> </center>
                    </Col>
                    <Col >
                        <center> <img src={seat} className="App-logo" alt="logo"
                            style={{ width: "1.25vw" }} /> </center>
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <center><img src={table} className="App-logo" alt="logo"
                            style={{ width: "5vw" }} /></center>
                    </Col>
                </Row >
                <Row >
                    <Col >
                        <center> <img src={seat} className="App-logo" alt="logo"
                            style={{ width: "1.25vw" }} /> </center>
                    </Col>
                    <Col >
                        <center> <img src={seat} className="App-logo" alt="logo"
                            style={{ width: "1.25vw" }} /> </center>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Table;




