import React, { Component } from 'react';
import IconPlay from './IconPlay';
import IconFullScreen from './IconFullscreen';
import IconVolume from './IconVolume';

 class VideoControl extends Component {
    render() {
        return (
            <div className="player__buttons-container">
                <div className="player__button-left">
                    <IconPlay />
                </div>
                <div className="player__button-time">
                    <div className="player__button-time--line"></div>
                    <div className="player__button-time--display">0:00/0:42</div>
                </div>
                <div className="player__buttons-right">
                    <IconFullScreen />
                    <IconVolume />
                </div>
            </div>
        )
    }
};

export default VideoControl;
