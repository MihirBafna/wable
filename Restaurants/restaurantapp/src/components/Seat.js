import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import emptyseat from '../img/emptyseat.svg'
import filledseat from '../img/emptyseat.svg'

class Seat extends React.Component {
    constructor(props){
        super(props);
        static seatcounter = 0;
        this.state {
            id: seatcounter++,
        }
    }
}