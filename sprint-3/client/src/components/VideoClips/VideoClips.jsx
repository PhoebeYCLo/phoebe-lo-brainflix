import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClipsCard from './ClipsCard';

const VideoClips = (props) =>{
    
    console.log("Main video id - " + props.mainVideoId);

    const filterMain = (item) =>{
        return item.id !== props.mainVideoId;
    }


    let videoToRender;
    if(props.videoList) {
        let filterVideo = props.videoList.filter(filterMain);
        videoToRender = filterVideo.map((item) => {
            return (
                <Link key={item.id} to={`/videos/${item.id}`}>
                    <ClipsCard 
                        key={item.id}
                        src={item.image}
                        channel={item.channel}
                        title={item.title}
                    />
                </Link>
            )
        })
    }

    return (
        <section className="clips__list">
            {videoToRender}
        </section>
    )
}

export default VideoClips;