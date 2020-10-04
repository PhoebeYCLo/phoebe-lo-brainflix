import React, { Component } from 'react';
import axios from 'axios';
import Player from '../Player/Player';
import Main from './Main';
import Minor from './Minor';

const apiURL = 'https://project-2-api.herokuapp.com';
const apiKEY = 'd9d69a08-141e-4487-b71c-d9a72fe56b89';

class Home extends Component {
    constructor(props){
        super();
        this.state = {
            mainVideo: [],
            sideVideos: []
        }
    }

    getMainVideo() {
        // default video 
        const mainvideoID = '1af0jruup5gu';

        axios.get(`${apiURL}/videos/${mainvideoID}?api_key=${apiKEY}`)
            .then(res => 
                // console.log(res))
                this.setState({ mainVideo: res.data }))
            .catch(err => console.log(err));
    }

    getSideVideo() {

        axios.get(`${apiURL}/videos?api_key=${apiKEY}`)
            .then(res => 
                // console.log(res))
                this.setState({ sideVideos: res.data }))
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getMainVideo();
        this.getSideVideo();
    }

    render() {
        return(
            <div className="home">
                {/* <Player data={this.state}/> */}
                <Player 
                    video={(this.state.mainVideo.video), apiKEY}
                    image={this.state.mainVideo.image}
                />
                <main className="home__content container">
                    <div className="home__main">
                        <Main title={this.state.mainVideo.title}
                              channel={this.state.mainVideo.channel}
                              timestamp={this.state.mainVideo.timestamp}
                              views={this.state.mainVideo.views}
                              likes={this.state.mainVideo.likes}
                              description={this.state.mainVideo.description}
                              comments={this.state.mainVideo.comments}
                        />
                    </div>
                    <div className="home__minor">
                        <Minor videoList={this.state.sideVideos}/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Home;
