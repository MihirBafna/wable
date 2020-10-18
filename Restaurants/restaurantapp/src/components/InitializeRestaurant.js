import React from 'react';
import { Form, FormGroup, Label, Input, Container, Jumbotron, Button } from 'reactstrap';

class InitializeRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            NumTables:NaN,
            NumSeats:NaN,
        }
    }

    changeHandlerName=e=>{
        this.setState({Name:e.target.value});
    }

    changeHandlerTables = e => {
        this.setState({ NumTables: parseInt(e.target.value) });
    }

    changeHandlerSeats = e => {
        this.setState({ NumSeats: parseInt(e.target.value) });
    }

    printRestaurantInfo=()=>{
        console.log(this.state.Name);
        console.log(this.state.NumTables);
        console.log(this.state.NumSeats);
    }
    render() {
        return(
            <Container style={{ padding: "5vh" }}>
                <div>
                    <Jumbotron >
                        <h1 className="display-3" style={{ fontWeight: 200, paddingBottom: "2vh" }}>Welcome to wable<span className="display-3" style={{ fontWeight: 200, paddingBottom: "2vh", color: "#5DB2B2" }}>-RX</span></h1>
                        <Form>
                            <FormGroup>
                                <Label for="restaurantName">Restaurant Name:</Label>
                                <Input type="text" name="restaurantName" id="restaurantName" placeholder="Enter your restaurant's name" value={this.state.Name} onChange={this.changeHandlerName}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="numTables">Number of Tables:</Label>
                                <Input type="number" name="numTables" id="numTables" placeholder="Enter the number of tables" value={this.state.NumTables} onChange={this.changeHandlerTables}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="numSeats">Number of Seats:</Label>
                                    <Input type="number" name="numSeats" id="numSeats" placeholder="Enter the number of seats" value={this.state.NumSeats} onChange={this.changeHandlerSeats} />
                            </FormGroup>
                            <Button type="submit" onClick={this.printRestaurantInfo} style={{ borderColor: "#5DB2B2", backgroundColor: "#5DB2B2" }}>Submit</Button>
                        </Form>
                    </Jumbotron>
                </div>
            </Container>
        );
    }
}

export default InitializeRestaurant