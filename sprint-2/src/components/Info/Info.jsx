import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import IconViews from './IconViews';
import IconLikes from './IconLikes';
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

const Info = (props) => {
    // state ={
    //     mainVideo: []
    // }

    // componentDidMount() {
    //     axios.get(process.env.PUBLIC_URL + "./data.json")
    //     .then((res) => {
    //         this.setState({mainVideo: res.data.mainVideo})
    //     })
    //     .catch(err => console.log(err));
    // }

    return (
        <div className="info__content">
            <div className="info__title">{props.title}</div>
            <div className="info__detail">
                <div className="info__detail-left">
                    <div className="info__channel">By {props.channel}</div>
                    <div className="info__date">{timestampConvert(props.timestamp)}</div>
                </div>
                <div className="info__detail-right">
                    <div className="info__views">
                        <IconViews />
                        {props.views}
                    </div>
                    <div className="info__likes">
                        <IconLikes />
                        {props.likes}
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="info__description">{props.description}</div>
        </div>
    )
}


export default Info;