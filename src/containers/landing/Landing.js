import React, { Component } from 'react';
import './Landing.css';
import Welcome from '../../components/welcome/welcome';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <h1 className="App-title">Landing</h1>
        </header>
        <Welcome/>
      </div>
    );
  }
}

export default Landing;
