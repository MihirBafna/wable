import React from 'react';
import NavBar from './components/NavBar';
import MainView from './components/MainView';
import GetStarted from './components/GetStarted';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

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
          <Route path="/tableview" component={MainView}></Route>
          {/* <Route path="/DataAnalytics" component={}></Route> */}
        </Router>
      </div>
    );
  }
}

export default App;
