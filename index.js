require('dotenv').config()

const express = require('express');
const app = express()
const cors = require('cors')

const PORT = process.env.PORT || 8080
const { CORS_ORIGIN } = process.env;

app.use(cors({ CORS_ORIGIN }));
app.use(express.json())

const videosRouter = require('./routes/videos')
app.use('/videos', videosRouter)

// const uploadRouter = require('./routes/upload')
// app.use('/upload-video', uploadRouter)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log('CTRL + C to stop server')
})