import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

import axios from 'axios';
import Player from '../Player/Player';
import Main from '../Home/Main';
import Minor from '../Home/Minor';

const apiURL = 'https://project-2-api.herokuapp.com';
const apiKEY = 'd9d69a08-141e-4487-b71c-d9a72fe56b89';

class VideoPage extends Component {
    constructor(props){
        super();
        this.state = {
            mainVideo: [],
            sideVideos: []
        }
    }

    getMainVideo(videoId) {
        // default video 
        // const mainvideoID = '1af0jruup5gu';
        // const mainvideoID = '1ainjruutd1j';

        // axios.get(`${apiURL}/videos/${mainvideoID}?api_key=${apiKEY}`)
        //     .then(res => 
        //         // console.log(res))
        //         this.setState({ mainVideo: res.data }))
        //     .catch(err => console.log(err));
        
            axios.get(`${apiURL}/videos/${videoId}?api_key=${apiKEY}`)
            .then(res => 
                // console.log(res))
                this.setState({ mainVideo: res.data }))
            .catch(err => console.log(err));
    }

    getSideVideo() {
        // const apiURL = 'https://project-2-api.herokuapp.com';
        // const apiKEY = 'd9d69a08-141e-4487-b71c-d9a72fe56b89';

        axios.get(`${apiURL}/videos?api_key=${apiKEY}`)
            .then(res => 
                // console.log(res))
                this.setState({ sideVideos: res.data }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getMainVideo('1af0jruup5gu');
        this.getSideVideo();
    }

    componentDidUpdate(prevState) {
        if(this.props.match.params.id !== prevState.match.params.id) {
            this.getMainVideo(this.props.match.params.id);
            if(this.props.match.path === "/") {
                this.getMainVideo('1af0jruup5gu');
            }
        }
    }

    render() {
        return(
            <div className="home">
                {/* <Player data={this.state}/> */}
                <Player 
                    src={this.state.mainVideo.video + apiKEY}
                    image={this.state.mainVideo.image}
                />
                <main className="home__content container">
                    <div className="home__main">
                        {/* <Main data={this.state.mainVideo} /> */}
                        <Main 
                            mainVideo={this.state.mainVideo}
                            comments={this.state.mainVideo.comments} />
                    </div>
                    <div className="home__minor">
                        {/* <Minor data={this.data}/> */}
                        <Minor 
                            videoList={this.state.sideVideos}
                            mainVideoId={this.state.mainVideo.id} />
                    </div>
                </main>
            </div>
        )
    }
}

// export default VideoPage;
export default withRouter(VideoPage);