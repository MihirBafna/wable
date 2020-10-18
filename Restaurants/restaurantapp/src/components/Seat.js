import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import emptyseat from '../img/emptyseat.svg'
import filledseat from '../img/filledseat.svg'

class Seat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seatID: this.props.seatnumber,
            seatFilled: false,
        };
    }
    render() {
        if (!this.state.seatFilled){
            return (
                <Col >
                    <center> <img src={emptyseat} id={this.state.seatID} className="App-logo" alt="logo"
                        style={{ width: "1.25vw" }} /> </center>
                </Col>
            );
        }else {
            return (
                <Col >
                    <center> <img src={filledseat} id={this.state.seatID} className="App-logo" alt="logo"
                        style={{ width: "1.25vw" }} /> </center>
                </Col>
            );
        }

    }
}

export default Seat