import React, { Component } from 'react';
import Comment from './Comment';
import axios from 'axios';

 class CommentList extends Component {
    constructor(props) {
        super();
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        axios.get(process.env.PUBLIC_URL + "./data.json")
        .then((res) => {
            this.setState({comments: res.data.mainVideo.comments})
        })
        .catch(err => console.log(err));
    }

    timestampConvert = (timestamp) => {
        const dateObj = new Date(timestamp);
        const date =
          dateObj.getMonth() +
          1 +
          "/" +
          dateObj.getDate() +
          "/" +
          dateObj.getFullYear();
        return date;
    }

    render() {
        return (
            <section className="comment__list">
                {this.state.comments.map((item) => 
                    <Comment 
                        key={item.id}
                        name={item.name}
                        date={this.timestampConvert(item.timestamp)}
                        comment={item.comment}
                    />
                )}
            </section>
        )
    }
}

export default CommentList;