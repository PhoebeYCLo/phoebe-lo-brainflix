const express = require('express');
// const uuid = require("uuid");
const router = express.Router();
const videos = require('../data.json');

// Get all video
router.get("/", (req, res) => {
    res.json(videos);
});

// Get video by id
router.get("/:id", (req, res) => {
    const findVideo = videos.some((video) => video.id === req.params.id);

    if (findVideo) {
        res.json(videos.filter((video) => video.id === req.params.id)[0]);
    }
});

module.exports = router;