import React from 'react';
import NavBar from './components/NavBar';
import { Container, Row, Col } from 'reactstrap';
// import './App.css';
import Table from './components/Table'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous" />
<<<<<<< HEAD
            <Table />
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
=======
>>>>>>> d3c120156fb303fa85cec966ae555e9f7d2b87c2
        </header>
        <NavBar />
        
      </div>
    );
  }
}

export default App;
