import React, { Component } from 'react';
import './ThankYou.css';
import CommentBoard from '../commentBoard/CommentBoard';
import ThankYouHeader from '../../components/thankYouHeader/ThankYouHeader';

class ThankYou extends Component {
    render() {
        return (
        <div className="ThankYou">
            <header className="App-header">
                <ThankYouHeader />
            </header>
            <br/>
            <div>
                <CommentBoard/>
            </div>           
        </div>
        );
    }
}

export default ThankYou;