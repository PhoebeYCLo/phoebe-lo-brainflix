const express = require('express');
const app = express();
const cors = require('cors');
const videos = require('./routes/video');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/videos', videos);
// app.use('/videos', videos);
// app.use('/videos/:id', videos);

app.listen('8080', () => console.log('started on port 8080'));