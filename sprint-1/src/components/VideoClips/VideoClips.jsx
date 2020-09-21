import React, { Component } from 'react';
import ClipsCard from './ClipsCard';
import axios from 'axios';

class VideoClips extends Component {
    constructor(props) {
        super();
        this.state = {
            sideVideos: []
        }
    }

    componentDidMount() {
        axios.get(process.env.PUBLIC_URL + "./data.json")
        .then((res) => {
            this.setState({sideVideos: res.data.sideVideos})
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <section className="clips__list">
                {this.state.sideVideos.map((item) => (
                    <ClipsCard 
                        key={item.id}
                        src={item.image}
                        channel={item.channel}
                        title={item.title}
                    />
                ))}
            </section>
        )
    }
}

export default VideoClips;