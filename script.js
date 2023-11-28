const fs = require('fs');
const ytdl = require('ytdl-core');



// YouTube video URL
var videoUrl = 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID';

// Download video
function downloadedVideo(URL) {
    ytdl(videoUrl)
    .pipe(fs.createWriteStream('video.mp4'))
    .on('finish', () => {
        console.log('Video downloaded successfully!');
    })
    .on('error', (err) => {
        console.error('Error:', err);
    });
}
// Extract audio
ytdl(videoUrl, { filter: 'audioonly' })
  .pipe(fs.createWriteStream('audio.mp3'))
  .on('finish', () => {
    console.log('Audio extracted successfully!');
  })
  .on('error', (err) => {
    console.error('Error:', err);
  });
