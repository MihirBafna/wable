import React from 'react';
import TableView from './TableView';
import Chart from "chart.js";
import { Card, CardTitle, CardText, CardBody, CardImg, Button, Container, Row, Col } from 'reactstrap';
// import classes from "./MainView.module.css";


class MainView extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: ["9am", "10am", "11am", "12pm", "1pm", "2m", "3pm","4pm","5pm","6pm"],
                datasets: [
                    {
                        label: "% Seats Occupied",
                        data: [86, 67, 91, 20, 30,40,20,10,60, 90],
                        backgroundColor: "rgb(93, 178, 178,0.5)",

                    }
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
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
                            <Row style={{ padding: "2vh" }}>
                                <Col>
                                    <Card style={{borderRadius:"10px"}}>
                                        <CardBody>
                                            <CardTitle style={{ fontWeight: "200" }}>Pending Orders</CardTitle>
                                            <h1>15</h1>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ borderRadius: "10px" }}>
                                        <CardBody>
                                            <CardTitle style={{ fontWeight: "200" }}>Completed Orders</CardTitle>
                                            <h1>15</h1>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ padding: "2vh" }}>
                                <Col>
                                    <div className="">
                                        <canvas
                                            id="myChart"
                                            ref={this.chartRef}
                                        />
                                    </div>
                                </Col>
                            </Row>
                            <Row style={{ padding: "2vh" }}>
                                <Col>
                                    <Card style={{ borderRadius: "10px" }}>
                                        <CardBody>
                                            <CardTitle style={{ fontWeight: "200" }}>Seats Occupied</CardTitle>
                                            <h1>62%</h1>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ borderRadius: "10px" }}>
                                        <CardBody>
                                            <CardTitle style={{ fontWeight: "200" }}>Total Tips</CardTitle>
                                            <h1>$50.29</h1>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MainView;