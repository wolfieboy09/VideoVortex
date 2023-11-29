const downloadedContent = document.getElementById('downloadedContent');


function newDownload(url) {
    downloadedContent.appendChild(`<a href="${url}"></a>`);
};


function downloadVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    newDownload(videoUrl.trim());
};