import React, { Component } from 'react';
import NewCommentForm from './NewCommentForm';

class Comments extends Component {
    render() {
        return (
            <div className="comments__content">
                <div className="comments__counter">3 Comments</div>
                <NewCommentForm />
            </div>
        )
    }
}

export default Comments;