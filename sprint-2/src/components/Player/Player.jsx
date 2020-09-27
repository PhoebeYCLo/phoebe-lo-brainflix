import React, { Component } from 'react';
import Video from './Video';
import VideoControl from './VideoControl';
import axios from 'axios';

// class Player extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             video: []
//         }
//     }

//     componentDidMount() {
//         axios.get(process.env.PUBLIC_URL + "./data.json")
//         .then((res) => {
//             this.setState({video: res.data.mainVideo})
//         })
//         .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <div className="player__container">
//                 <div className="player__video-container">
//                     <video 
//                     className="player__video"
//                     poster={this.state.video.image}
//                     src={this.state.video.video}>
//                         <source type="video/mp4" />
//                     </video>
//                     <VideoControl />
//                 </div>
//             </div>
//         )
//     }
// }

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