import React from 'react';
import Comment from './Comment';

const timestampConvert = (timestamp) => {
    const dateObj = new Date(timestamp);
    const date =
      dateObj.getMonth() +
      1 +
      "/" +
      dateObj.getDate() +
      "/" +
      dateObj.getFullYear();
    return date;
};

 const CommentList = (props) => {

    let commentToRender;
    if (props.comments) {
        commentToRender = props.comments.map((item) => {
            return (
                <Comment 
                    key={item.id}
                    name={item.name}
                    date={timestampConvert(item.timestamp)}
                    comment={item.comment}
                />
            )
        })
    }

    return (
        <section className="comment__list">
            {commentToRender}
        </section>
    )
}

export default CommentList;