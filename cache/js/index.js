var xhr = new XMLHttpRequest();
var file = "https://testeofflineapps-ezanattatray.c9users.io/";
var randomNum = Math.round(Math.random() * 10000);
xhr.open('GET', file + "?rand=" + randomNum, false);
try {
    xhr.send();
    if (xhr.status >= 200 && xhr.status < 304) {
        console.log("Online");
    } else {
        window.location = "/offline.html";
    }
} catch (e) {
    window.location = "/offline.html";
}

setTimeout(function(){
    var h1 = document.getElementById("title");
    h1.textContent = "Test OK..";
}, 1500)