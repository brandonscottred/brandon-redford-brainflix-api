const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

const jsonVideos = fs.readFileSync('./data/videos.json', 'utf8');
console.log(jsonVideos);
const videos = JSON.parse(jsonVideos);
console.log(videos);
console.log(typeof(videos));

const hardCodeImage = "http://localhost:8080/images/brainflix.png"


// Getting all
router.get('/', (req, res) => {
    {const videoList = videos.map((video) => {
        return (
            {"id":video.id, "title":video.title, "channel":video.channel, "image":video.image}
        )
    })
    res.json(videoList)
    }
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
        channel: "BrainFlix Special",
        image: hardCodeImage,
        description,
        views: "2,043,765",
        likes: "400,058",
        duration: "7:26",
        timestamp: Date.now(),
    };
    videos.push(newVideo);
    const newVideos = JSON.stringify(videos)
    fs.writeFileSync('./data/videos.json', newVideos)
    res.json(newVideos)
})

// Updating one
router.patch('/:id', (req, res) => {

})
// Deleting one
router.delete('/:id', (req, res) => {

})

module.exports = router;