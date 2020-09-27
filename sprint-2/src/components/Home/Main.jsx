import React from 'react';
import Info from '../Info/Info';
import Comments from '../Comments/Comments';

const Main = (props) => {
    return (
        <div>
            {/* <Info data={props.data}/> */}
            {/* <Info title={props.title}
                  channel={props.channel}
                  timestamp={props.timestamp}
                  views={props.views}
                  likes={props.likes}
                  description={props.description}
                  /> */}

            <Info title={props.mainVideo.title}
                  channel={props.mainVideo.channel}
                  timestamp={props.mainVideo.timestamp}
                  views={props.mainVideo.views}
                  likes={props.mainVideo.likes}
                  description={props.mainVideo.description}
                  />
            {/* <Comments data={props.data}/> */}
            <Comments comments={props.comments}/>
        </div>
    )
}

export default Main;