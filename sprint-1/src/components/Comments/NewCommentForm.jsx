import React, { Component } from 'react';
import userImg from '../../assets/images/Mohan-muruge.jpg';

class NewCommentForm extends Component {
    render() {
        return (
            <div className="comment__input-container">
                <div className="comment__input-heading">Join the conversation</div>
                <div className="comment__input-user">
                    <div class="comment__avatar">
                        <img src={userImg} alt="User avatar"/>
                    </div>
                </div>
                <div className="comment__input-body">
                    <form className="comment__form" action="" id="form">
                    <textarea class="comment__message-container" 
                              name="userComment" 
                              placeholder="Add a new comment" 
                              id="commentContent"></textarea>
                    <button type="submit" id="btnSumbit" class="comment__submit-btn btn">comment</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default NewCommentForm;