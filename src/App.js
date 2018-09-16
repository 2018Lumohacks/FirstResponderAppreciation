import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './containers/landing/Landing'
import ThankYou from './containers/thankYou/ThankYou'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component = {Landing} />
            <Route exact path="/ThankYou" component = { ThankYou} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
