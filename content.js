var player = document.getElementsByClassName('video-stream html5-main-video')[0];

function setSeek(timestamp) {
    console.log("Setting seek time to "+timestamp)
    player.currentTime = timestamp
}

function pauseVideo() {
    console.log("Pausing video")
    player.pause()
}

function resumeVideo() {
    console.log("Resuming video")
    player.play()
}

chrome.runtime.onMessage.addListener(request,sender, sendResponse => {
    if (request.greeting === 'hello') {
      pauseVideo()
      sendResponse({ farewell: 'goodbye' })
    }
});


