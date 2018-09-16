import React, { Component } from 'react';
import './ThankYou.css';
import CommentBoard from './src/containers/commentBoard/CommentBoard.js'

class ThankYou extends Component {
    render() {
        return (
        <div className="ThankYou">
            <header className="App-header">
                <h1 className="App-title">Thank You!</h1>
            </header>
            <br/>
            <h3>Past Comments</h3>
            <br/>
            <div>
                <CommentBoard />
            </div>           
        </div>
        );
    }
}

export default ThankYou;