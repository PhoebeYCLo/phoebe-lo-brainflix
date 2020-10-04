import React from 'react';
import VideoClips from '../VideoClips/VideoClips';

 const Minor = (props) => {
    return (
        <section className="minor">
            <div className="minor__title">Next Video</div>
            <VideoClips videoList={props.videoList}
                        mainVideoId={props.mainVideoId} />
        </section>
    )
}

export default Minor;