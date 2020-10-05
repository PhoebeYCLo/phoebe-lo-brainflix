const express = require('express');
const uuid = require("uuid");
const router = express.Router();
const videos = require('../data.json');

// Get all video
router.get("/videos", (req, res) => {
    res.json(videos);
});

// Get video by id
router.get("/videos/:id", (req, res) => {
    const findVideo = videos.some((video) => video.id === req.params.id);

    if (findVideo) {
        res.json(videos.filter((video) => video.id === req.params.id)[0]);
    }
});

// Post video
router.post("/videos", (req, res) => {
    const newVideo = {
        id: uuid.v4(),
        title: req.body.title,
        channel: 'Bike Channel',
        image: req.body.image,
        description: req.body.description,
        views: "831",
        likes: "721",
        duration: "6:12",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: Date.now(),
        comments: [
            {
                name: "Micheal Lyons",
                comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                likes: 0,
                timestamp: 1545162149000
            }
        ]
    };

    videos.push(newVideo);
    res.json(videos);
});

module.exports = router;