import React from 'react';
import VideoClips from '../VideoClips/VideoClips';

 const Minor = (props) => {
    return (
        <section className="minor">
            <div className="minor__title">Next Video</div>
            <VideoClips data={props.data}/>
        </section>
    )
}

export default Minor;