import React, { Component } from 'react';
import IconViews from './IconViews';
import IconLikes from './IconLikes';
import axios from 'axios';

class Info extends Component {
    state ={
        mainVideo: []
    }

    componentDidMount() {
        axios.get(process.env.PUBLIC_URL + "./data.json")
        .then((res) => {
            this.setState({mainVideo: res.data.mainVideo})
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
    };

    render() {
        return (
            <div className="info__content">
                <div className="info__title">{this.state.mainVideo.title}</div>
                <div className="info__detail">
                    <div className="info__detail-left">
                        <div className="info__channel">By {this.state.mainVideo.channel}</div>
                        <div className="info__date">{this.timestampConvert(this.state.mainVideo.timestamp)}</div>
                    </div>
                    <div className="info__detail-right">
                        <div className="info__views">
                            <IconViews />
                            {this.state.mainVideo.views}
                        </div>
                        <div className="info__likes">
                            <IconLikes />
                            {this.state.mainVideo.likes}
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="info__description">{this.state.mainVideo.description}</div>
            </div>
        )
    }
}

export default Info;