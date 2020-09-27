import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ClipsCard from './ClipsCard';
import axios from 'axios';

// class VideoClips extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             sideVideos: []
//         }
//     }

//     componentDidMount() {
//         axios.get(process.env.PUBLIC_URL + "./data.json")
//         .then((res) => {
//             this.setState({sideVideos: res.data.sideVideos})
//         })
//         .catch(err => console.log(err));
//     }

//     render() {
//         return (
//             <section className="clips__list">
//                 {this.state.sideVideos.map((item) => (
//                     <ClipsCard 
//                         key={item.id}
//                         src={item.image}
//                         channel={item.channel}
//                         title={item.title}
//                     />
//                 ))}
//             </section>
//         )
//     }
// }

const VideoClips = (props) =>{
    
    console.log(props.mainVideoId);

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