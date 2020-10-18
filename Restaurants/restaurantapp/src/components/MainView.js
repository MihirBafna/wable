import React from 'react';
import TableView from './TableView';
import { Container, Row, Col } from 'reactstrap';
import WaiterStatistics from './WaiterStatistics';
import axios from "axios";

class MainView extends React.Component {
    constructor(props) {
        super(props);
        var factors = this.getFactors(this.props.tables);
        var rows = factors[parseInt(factors.length / 2)];
        var cols = this.props.tables / rows;
        this.state={
            rows: rows,
            cols: cols,
        }

    }
    get() {
        axios.get('/tableview')
            .then((response) => {
                console.log(response.data);
            });
    }


    getFactors(num) {
        const isEven = num % 2 === 0;
        let inc = isEven ? 1 : 2;
        let factors = [1, num];

        for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
            if (num % curFactor !== 0) continue;
            factors.push(curFactor);
            let compliment = num / curFactor;
            if (compliment !== curFactor) factors.push(compliment);
        }

        return factors;
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col className=" col-9" >
                        <center><h1 style={{ paddingTop: "2vh", fontWeight:"200"}}>Table View</h1></center>
                        <hr className="my-2" style={{ height:"5"}}/>
                        <TableView rows={this.state.rows} cols={this.state.cols}/>
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