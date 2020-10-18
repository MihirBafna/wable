import React from 'react';
import Chart from "chart.js";
import { Card, CardTitle, CardBody, Row, Col } from 'reactstrap';


class WaiterStatistics extends React.Component {
    constructor(props) {
        super(props);
        this.updateTip = this.updateTip.bind(this)

        // this.setState({ totalTip: 0 })
        // this.setState({ completed: 0 })
        // this.setState({ seatsFilled: []})
        // this.setState({timeStamps: []})
    }

    updateTip(data,i){
        var tipAmount = data.tlog.tenders[i].tipAmount.amount;
        this.setState({ totalTip: this.state.totalTip + tipAmount }, function () {
            console.log(this.state.totalTip);
        });

    }
    state = {
        totalTip: 0,
        completed: 0,
        seatsFilled: [],
        timeStamps: [],
    }
    
    chartRef = React.createRef();
    async componentDidMount() {
        try {
            setInterval(async () => {
                // const res = await fetch('https://api.apijson.com/...');
                // const data = await res.json();
            }, 30000);
        } catch (e) {
            console.log(e);
        }
        const data = require("../data/transaction_data.json")
        for(var i = 0; i<data.tlog.tenders.length;i++){
            this.updateTip(data,i)
        }
        this.state.timeStamps.push(data.closeDateTimeUtc.dateTime);
        this.setState({completed: this.state.completed++ }, function () {
            console.log(this.state.completed);
        });
        console.log(this.state.seatsFilled);
        console.log(this.state.timeStamps);
        console.log(this.state.totalTip);
        console.log(this.state.completed);
        const myChartRef = this.chartRef.current.getContext("2d");
        var times = [];
        var seatpercentages = [];
        for (var i=0; i< this.state.timeStamps.length; i++) {
            var str = this.state.timeStamps[i].substring(11,13);
            var num = parseInt(str);
            if (num>12) {
                str = (num%12).toString()+"pm";
            } else {
                str = num.toString()+"am";
            }
            times[i] = str;
            seatpercentages[i] = (this.state.seatsFilled.length+1) * 100 / this.props.totalseats;
        }

        new Chart(myChartRef, {
            type: "line",
            data: {
                labels: times,
                datasets: [
                    {
                        label: "% Seats Occupied",
                        data: seatpercentages,
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
        return(
                <div style={{ height: "100vh", backgroundColor: "#E9ECEF" }}>
                    <center><h1 style={{ paddingTop: "2vh", fontWeight: "200" }}>Statistics</h1></center>
                    <hr className="my-2" />
                    <Row style={{ padding: "2vh" }}>
                        <Col>
                            <Card style={{ borderRadius: "10px" }}>
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
        );
    }
}

export default WaiterStatistics;