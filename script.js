const dC = document.getElementById('downloadedContent');
const downVid = document.getElementById('downVid');
const downAud = document.getElementById('downAud')

function newDownload(url) {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.textContent = `${url}`;
    dC.appendChild(anchor);
}

function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value.trim();
    newDownload(videoUrl);
}
