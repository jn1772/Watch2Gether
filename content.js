var player = document.getElementsByClassName('video-stream html5-main-video')[0];
var mode = "";

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

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "hello"){
            pauseVideo()
            sendResponse({ farewell: 'goodbye' })
        }
        if (request.mode === "master"){
            console.log("In master mode")
            mode = "master" 
        }
        if (request.mode === "slave"){
            console.log("In slave mode")
            mode = "slave"
        }
    }
);

//Master functions to sync the state of master player

function masterSyncPause() {
    console.log("Mode is "+mode);
    //then notify others
    console.log("Master paused the video");
    console.log("Relaying to slaves");
}

function masterSyncPlay() {
    console.log("Master resumed the video");
    console.log("Relaying to slaves");
}

function masterSyncSeek() {
    console.log("Master seeked the video");
    console.log("Relaying to slaves");
}

//Slave function to sync slave state with master player
function slaveSync() {
    //This function should keep polling for events from server to follow the party leader
}

//Add listener
player.onpause = masterSyncPause
player.onplay = masterSyncPlay
player.onseeked = masterSyncSeek


