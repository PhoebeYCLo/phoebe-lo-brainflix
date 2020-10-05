import React, { Component } from 'react';
import axios from 'axios';

const URL = "http://localhost:8080";

class Upload extends Component {

    handleSubmit = (e) =>{
        e.preventDefault();
        const videoTitle = e.target.videoTitle.value;
        const videoDescription = e.target.videoDescription.value;

        axios.post(`${URL}/videos`, {
            title: videoTitle,
            description: videoDescription,
            image: 'https://i.imgur.com/Pr6lP45.jpg'
        }).then(res => {
            console.log(res.data);
        });

        e.target.reset();
    }

    render() {
        return (
            <div className="upload">
                <main className="upload__content container">
                    <div className="upload__heading">
                        Upload Video
                    </div>
                    <div className="divider upload__divider"></div>
                    <div className="upload__main-content">
                        <div className="upload__video-preview">
                            <div className="upload__video-label">
                                Video thumbnail
                            </div>
                            <div className="upload__video-thumbnail">
                                <img src="/assets/images/upload-video-preview.jpg" alt="Video preview" />
                            </div>
                        </div>
                        <form onSubmit={this.handleSubmit} className="upload__form" action="post">
                            <label className="upload__video-label">Title your video</label>
                            <input className="upload__form-input input" 
                                type="text"
                                name="videoTitle" 
                                placeholder="Add a title to your video"></input>
                            <label className="upload__video-label">Add a video description</label>
                            <textarea className="upload__form-textarea textarea" 
                                name="videoDescription"
                                placeholder="Add a description of your video"></textarea>
                            <div className="divider upload__divider"></div>
                            <div className="upload__form-control">
                                <button className="upload__submit-btn btn">Publish</button>
                                <button className="upload__cancel-btn btn">Cancel</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}

export default Upload;