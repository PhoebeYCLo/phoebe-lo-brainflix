import React from 'react';
import VideoControl from './VideoControl';


const Player = (props) => {
    return (
        <div className="player__container">
            <div className="player__video-container">
                <video 
                className="player__video"
                poster={props.image}
                src={props.video}>
                    <source type="video/mp4" />
                </video>
                <VideoControl />
            </div>
        </div>
    )
}

export default Player;