import React, { Component } from 'react';
import './Landing.css';
import Welcome from '../../components/welcome/welcome';
import Button from '../../components/button/button';

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        <header className="App-header">
          <h1 className="App-title">Landing</h1>
        </header>
        <Welcome/>
        <Button/>
      </div>
    );
  }
}

export default Landing;
