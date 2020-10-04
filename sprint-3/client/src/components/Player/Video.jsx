import React from 'react'

const Video = (props) => {
    return (
        <div>
            <video className="player__video"
                src={props.src} poster={props.poster}></video>
        </div>
    )
}

export default Video;