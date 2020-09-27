import React, { Component } from 'react';
import Comment from './Comment';
import axios from 'axios';

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
    // constructor(props) {
    //     super();
    //     this.state = {
    //         comments: []
    //     }
    // }

    // componentDidMount() {
    //     axios.get(process.env.PUBLIC_URL + "./data.json")
    //     .then((res) => {
    //         this.setState({comments: res.data.mainVideo.comments})
    //     })
    //     .catch(err => console.log(err));
    // }

    // render() {
    //     return (
    //         <section className="comment__list">
    //             {this.state.comments.map((item) => 
    //                 <Comment 
    //                     key={item.id}
    //                     name={item.name}
    //                     date={this.timestampConvert(item.timestamp)}
    //                     comment={item.comment}
    //                 />
    //             )}
    //         </section>
    //     )
    // }

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