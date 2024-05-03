const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

const fs = require('fs')
const jsonVideos = fs.readFileSync('./data/videos.json', 'utf8');
console.log(jsonVideos);
const videos = JSON.parse(jsonVideos);
console.log(videos);
console.log(typeof(videos));

router.use(express.static('public'))
const hardCodeImage = "http://localhost:8080/public/images/Upload-video-preview.jpg"


// Getting all
router.get('/', (req, res) => {
    res.json(videos)
})

// Getting one
router.get('/:id', (req, res) => {
    const videoId = req.params.id;
    const video = videos.find(video => video.id === videoId)
    res.json(video);
})

// Creating one
router.post('/', (req, res) => {
    const { title, description } = req.body;
    const newVideo = {
        id: uuidv4(),
        title,
        description,
        image: hardCodeImage
    };
    videos.push(newVideo);
    res.json(newVideo)
    // i think this will require writeFileSync to add the body to our 
    // JSON file for new video
})

// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router;