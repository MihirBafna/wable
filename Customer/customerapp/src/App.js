import React from 'react';
import NavBar from './components/NavBar';
import Menu from './components/Menu'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import PaymentPortal from './components/PaymentPortal';
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
      <Switch>
      <Route exact path="/">
        <Redirect to="/menu" />
      </Route>
      <Route path="/menu" component={Menu} />
      <Route path="/paymentportal" component={PaymentPortal} />
      </Switch>
    </Router>

      </div>
    );
  }
}

export default App;
