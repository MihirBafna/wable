import React from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return(
    <div className="App">
      <header meta="wable-CX"></header>
    <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossorigin="anonymous" />
    <Router>
      <NavBar />
      <Route path="/" component={Menu} />
    </Router>

      </div>
    );
  }
}

export default App;
