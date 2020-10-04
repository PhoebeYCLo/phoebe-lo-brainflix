const express = require('express');
const router = express.Router();
const videos = require('../data.json');

// Get all video
router.get("/", (req, res) => {
    res.json(videos);
});

module.exports = router;