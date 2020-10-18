import React from 'react'
import { Container, Row, Col} from 'reactstrap';
import emptyseat from '../img/emptyseat.svg'
import filledseat from '../img/emptyseat.svg'
import table from '../img/table.svg'
import Seat from './Seat'

class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container style={{ width: "7vw" }}>
                <Row  >
                    <Seat seatnumber={this.props.tablenumber*1}/>
                    <Seat seatnumber={this.props.tablenumber*2} />
                </Row>
                <Row >
                    <Col >
                        <center><img src={table} className="App-logo" alt="logo"
                            style={{ width: "5vw" }} /></center>
                    </Col>
                </Row >
                <Row >
                    <Seat seatnumber={this.props.tablenumber * 3} />
                    <Seat seatnumber={this.props.tablenumber * 4} />
                </Row>
            </Container>
        );
    }
}

export default Table;




