import React from 'react'
import { Container, Row, Col} from 'reactstrap';
import emptyseat from '../img/emptyseat.svg'
import filledseat from '../img/emptyseat.svg'
import table from '../img/table.svg'


class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{ width: "7vw" }}>
                <Row  >
                    <Col >
                        <center> <img src={emptyseat} className="App-logo"  alt="logo"
                            style={{width:"1.25vw"}} /> </center>
                    </Col>
                    <Col >
                        <center> <img src={emptyseat} className="App-logo" alt="logo"
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
                        <center> <img src={emptyseat} className="App-logo" alt="logo"
                            style={{ width: "1.25vw" }} /> </center>
                    </Col>
                    <Col >
                        <center> <img src={emptyseat} className="App-logo" alt="logo"
                            style={{ width: "1.25vw" }} /> </center>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Table;




