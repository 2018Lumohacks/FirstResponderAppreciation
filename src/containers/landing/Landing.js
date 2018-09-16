import React, { Component } from 'react';
import './Landing.css';
import Welcome from '../../components/welcome/welcome';
import {testDB} from '../../service/last'

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <h1 className="App-title">Landing</h1>
        </header>
        <Welcome/>
        <button onClick = {testDB("hellooooo world")}>Test</button>
      </div>
    );
  }
}

export default Landing;
