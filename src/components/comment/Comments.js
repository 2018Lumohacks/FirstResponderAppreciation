import React, { Component } from 'react';
import './Comments.css';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
            {title: 'test title1', text: 'test comment1'},
            {title: 'test title2', text: 'test comment2'},
            {title: 'test title3', text: 'test comment3'},
            {title: 'test title4', text: 'test comment4'},
            {title: 'test title5', text: 'test comment5'},
            {title: 'test title6', text: 'test comment6'},
            {title: 'test title7', text: 'test comment7'},
            {title: 'test title8', text: 'test comment8'},
            {title: 'test title9', text: 'test comment9'}]
        }
    }
    render() {
        return (
            <table>
                <tr>
                    <td>
                        Title: {this.state.data.map(comment => comment.title)}
                        <br/>
                        Text: {this.state.data.map(comment => comment.text)}
                    </td>
                    <td>
                        Title: {this.state.data.map(comment => comment.title)}
                        <br/>
                        Text: {this.state.data.map(comment => comment.text)} 
                    </td>
                    <td>
                        Title: {this.state.data.map(comment => comment.title)}
                        <br/>
                        Text: {this.state.data.map(comment => comment.text)}
                    </td>                  
                </tr>
            </table>
        );
    }
}

export default Comments;