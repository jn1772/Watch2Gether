document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('newSessionButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        createSession();
        sendMessage({"mode": "master"})
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('joinSessionButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        joinSession();
        sendMessage({"mode": "slave"})
    });
});

function createSession() {
    //call backend api to return a Session ID
}

function joinSession() {
    //call backend api to join a Session ID relay
}

function sendMessage(obj){
    chrome.tabs.query({ url: 'https://*.youtube.com/*' }, tabs => {
            tabs.forEach(tab => {
                window.alert("sending message "+obj+"to this tab id "+tab.id);
                chrome.tabs.sendMessage(tab.id, obj);
            })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        sendMessage({ greeting: 'hello'});
    })
})
