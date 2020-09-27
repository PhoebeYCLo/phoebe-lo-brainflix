import React from 'react';
import VideoClips from '../VideoClips/VideoClips';

 const Minor = (props) => {
    return (
        <section className="minor">
            <div className="minor__title">Next Video</div>
            {/* <VideoClips data={props.data}/> */}
            <VideoClips videoList={props.videoList}/>
        </section>
    )
}

export default Minor;