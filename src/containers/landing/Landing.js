import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Welcome from '../../components/welcome/welcome';

class Landing extends Component {
  render() {
    return (
      <header className="Landing-header">
        <div className="Landing">
          <Welcome/>
          <Link className="btn btn-success btn-xl"to="/newPost" style={{ textDecoration: 'none'}}>Start</Link>
        </div>
      </header>
    );
  }
}

export default Landing;
