import React, { Component } from 'react';
import NewCommentForm from './NewCommentForm';
import CommentList from './CommentList';

const Comments = (props) => {
    return (
        <div className="comments__content">
            <div className="comments__counter">3 Comments</div>
            <NewCommentForm />
            <div className="divider"></div>
            <CommentList comments={props.comments} />
        </div>
    )
}

export default Comments;