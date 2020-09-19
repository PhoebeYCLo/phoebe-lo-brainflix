import React, { Component } from 'react';

 class VideoControl extends Component {
    render() {
        return (
            <div className="player__buttons-container">
                <div className="player__button-play"></div>
                <div className="player__button-time">
                    <div className="player__button-time--line"></div>
                    <div className="player__button-time--display">0:00/0:42</div>
                </div>
                <div className="player__buttons-right">
                    <div className="player__button-fullScreen"></div>
                    <div className="player__button-volume"></div>
                </div>
            </div>
        )
    }
};

export default VideoControl;
