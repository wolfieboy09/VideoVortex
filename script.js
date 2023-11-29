const dC = document.getElementById('downloadedContent');

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
