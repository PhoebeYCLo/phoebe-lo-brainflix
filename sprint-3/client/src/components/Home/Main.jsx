import React from 'react';
import Info from '../Info/Info';
import Comments from '../Comments/Comments';

const Main = (props) => {
    return (
        <div className="home__main-content">
            <Info title={props.mainVideo.title}
                  channel={props.mainVideo.channel}
                  timestamp={props.mainVideo.timestamp}
                  views={props.mainVideo.views}
                  likes={props.mainVideo.likes}
                  description={props.mainVideo.description}
                  />

            <Comments comments={props.comments}/>
        </div>
    )
}

export default Main;