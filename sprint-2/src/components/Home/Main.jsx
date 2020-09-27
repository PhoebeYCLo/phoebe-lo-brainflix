import React from 'react';
import Info from '../Info/Info';
import Comments from '../Comments/Comments';

const Main = (props) => {
    return (
        <div>
            {/* <Info data={props.data}/> */}
            <Info title={props.title}
                  channel={props.channel}
                  timestamp={props.timestamp}
                  views={props.views}
                  likes={props.likes}
                  description={props.description}
                  />
            {/* <Comments data={props.data}/> */}
            <Comments comments={props.comments}/>
        </div>
    )
}

export default Main;