import React from 'react';
import InitializeRestaurant from './components/InitializeRestaurant';
import GetStarted from './components/GetStarted'
import {
  BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';
import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
          <script src="path/to/chartjs/dist/Chart.js"></script>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous" />
        </header>
        <Router>
          <NavBar />
          <Switch>
          <Route path="/" component={InitializeRestaurant}></Route>
          <Route path="/getstarted" component={GetStarted}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
