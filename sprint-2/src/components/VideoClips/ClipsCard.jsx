import React from 'react'

const ClipsCard = (props) => {
    return (
        <div className="clips__container">
                <div className="clips__card">
                    <div className="clips__card-image-container">
                        <img src={props.src} alt="Video Thumbnail" />
                    </div>
                    <div className="clips__card-detail">
                        <div className="clips__card-title">{props.title}</div>
                        <div className="clips__card-channel">{props.channel}</div>
                    </div>
                </div>
            </div>
    )
}

export default ClipsCard;
