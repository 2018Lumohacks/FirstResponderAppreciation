import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Landing from './containers/landing/Landing'
import ThankYou from './containers/thankYou/ThankYou'
import NewPost from './containers/newPost/newPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component = {Landing} />
            <Route exact path="/ThankYou" component = { ThankYou} />
            <Route exact path="/newPost" component = {NewPost} />

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
