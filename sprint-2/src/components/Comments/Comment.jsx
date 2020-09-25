import React from 'react';
import userImg from '../../assets/images/Mohan-muruge.jpg';

 const Comment = (props) => {

    return (
        <div className="comment">
            <div className="comment__avater-img">
                <img src={userImg} alt="" />
            </div>
            <div className="comment__body">
                <div className="comment__head">
                    <div className="comment__name">{props.name}</div>
                    <div className="comment__date">{props.date}</div>
                </div>
                <div className="comment__detail">{props.comment}</div>
            </div>
        </div>
    )

}

export default Comment;