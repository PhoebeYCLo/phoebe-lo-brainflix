import React, { Component } from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';

class Comments extends Component {
    render() {
        return (
            <div className="comments__content">
                <div className="comments__counter">3 Comments</div>
                <NewCommentForm />
                <div className="divider"></div>
                <CommentList />
            </div>
        )
    }
}

export default Comments;