import React from 'react';
import { Form, FormGroup, Label, Input, Container, Jumbotron, Button } from 'reactstrap';
import axios from "axios";
class InitializeRestaurant extends React.Component {
    constructor(props){
        super(props);
        this.state={
            Name:"",
            NumTables:NaN,
            NumSeats:NaN,
            selectedFile: null,
            jsonData: null

        }
    }

    onFileChange = event => {

        this.setState({ selectedFile: event.target.files[0] });

    }; 

    onFileUpload = e => {
        const fileReader = new FileReader();
        fileReader.readAsText(e.target.files[0], "UTF-8");
        fileReader.onload = e => {
            console.log("e.target.result", e.target.result);
            this.setState({ selectedFile: e.target.result });
            this.setState({jsonData: JSON.parse(this.state.selectedFile)})
        };

    };


    changeHandlerName=e=>{
        this.setState({Name:e.target.value});
    }

    changeHandlerTables = e => {
        this.setState({ NumTables: parseInt(e.target.value) });
    }

    changeHandlerSeats = e => {
        this.setState({ NumSeats: parseInt(e.target.value) });
    }

    changeHandlerMenu = e => {
        this.setState({ NumSeats: parseInt(e.target.value) });
    }

    printRestaurantInfo=()=>{
        console.log(this.state.Name);
        console.log(this.state.NumTables);
        console.log(this.state.NumSeats);
    }

    postToRx(){
        console.log(this.state.Name);
        console.log(this.state.NumTables);
        console.log(this.state.NumSeats);

        axios({
            method: 'post',
            url: '/tableview/data',
            data: {
                Name: this.state.Name,
                Seats: this.state.Seats,
                Tables: this.state.Tables,
            }
        });
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
                            <FormGroup>
                                <Label for="exampleFile">Select Menu:</Label>
                                <Input type="file" name="file" id="exampleFile" value={this.state.selectedFile} onChange={this.onFileChange}/>
                            </FormGroup>
                            <Button type="submit" onClick={this.postToRx} style={{ borderColor: "#5DB2B2", backgroundColor: "#5DB2B2" }}>Submit</Button>
                        </Form>
                    </Jumbotron>
                </div>
            </Container>
        );
    }
}

export default InitializeRestaurant