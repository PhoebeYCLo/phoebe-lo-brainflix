import React from 'react'

 const Upload = () => {
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
                    <form className="upload__form" action="">
                        <label className="upload__video-label">Title your video</label>
                        <input className="upload__form-input input" type="" 
                            placeholder="Add a title to your video"></input>
                        <label className="upload__video-label">Add a video description</label>
                        <textarea className="upload__form-textarea textarea" name="formDescription"
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

export default Upload;