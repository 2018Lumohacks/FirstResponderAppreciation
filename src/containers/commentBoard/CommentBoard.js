import React, { Component } from 'react';
import './CommentBoard.css';
import ConfirmSubmission from './components/confirmSubmission/ConfirmSubmission'
import Comment from "./components/comment/Comment"

class CommentBoard extends Component {
    render() {
        return (
            <div>
                <ConfirmSubmission />
                <Comment />
            </div>
        );
    }
}

export default CommentBoard;