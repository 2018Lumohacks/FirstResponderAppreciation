import React, { Component } from 'react';
import './Comment.css';

class Comment extends Component {
    render() {
        let comments = [
            {title: 'test title', text: 'test comment'},
            {title: 'test title2', text: 'test comment2'},
            {title: 'test title3', text: 'test comment3'},
            {title: 'test title4', text: 'test comment4'},
            {title: 'test title5', text: 'test comment5'},
            {title: 'test title6', text: 'test comment6'},
            {title: 'test title7', text: 'test comment7'},
        ];

        return (
            <ul>
                {comments.map(comment => (
                    <li>
                        Title: {comments.title};
                        Text: {comments.text};
                    </li>
                ))}
            </ul>
        );
    }
}

export default Comment;