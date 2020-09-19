import React, { Component } from 'react'
import axios from 'axios';

class Player extends Component {
    constructor(props) {
        super();
        this.state = {
            video: []
        }
    }

    componentDidMount() {
        axios.get("./data.json")
        .then((res) => {
            this.setState({video: res.data.mainVideo})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="player__container">
                <div className="player__video-container">
                    <video 
                    className="player__video"
                    poster={this.state.video.image}
                    src={this.state.video.video}>
                        <source type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}

export default Player;