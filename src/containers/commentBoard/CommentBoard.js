import React, { Component } from 'react';
import './CommentBoard.css';
import ConfirmSubmission from '../../components/confirmSubmission/ConfirmSubmission'
import Comments from "../../components/comment/Comments"

class CommentBoard extends Component {
    render() {
        return (
            <div>
                <ConfirmSubmission />
                <Comments />
            </div>
        );
    }
}

export default CommentBoard;