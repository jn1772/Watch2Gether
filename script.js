document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('newSessionButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        joinSession();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('joinSessionButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        joinSession();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('testButton');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.query({ url: 'https://*.youtube.com/*' }, tabs => {
            tabs.forEach(tab => 
                chrome.tabs.sendMessage({ greeting: 'hello '}, response => 
                console.log(response.farewell))
            );
        });
    });
});

function joinSession() {
  window.alert("Now going")
  }
