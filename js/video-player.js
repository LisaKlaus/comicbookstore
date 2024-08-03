const video = document.getElementById('myVideo');
const btnPlay = document.getElementById('play');
const btnMute = document.getElementById('mute');
const playlist = ['video1', 'video2', 'video3'];
let number = 0;

function play() {
    if (video.paused){
        video.play();
        btnPlay.innerHTML = 'Pause';
    } else {
        video.pause();
        btnPlay.innerHTML = 'Play';
    }
}

function mute() {
    if (video.muted) {
        video.muted = false;
        btnMute.innerHTML = 'Off';
    } else {
        video.muted = true;
        btnMute.innerHTML = 'On';
    }
}

function next() {
    if (number < playlist.length - 1) {
        number++;
    } else {
        number = 0;
    }
   video.src = `video/${playlist[number]}.mp4`;
}

function prev() {
    if (number != 0) {
        number--;
    } else {
        number = playlist.length - 1;
    }
   video.src = `video/${playlist[number]}.mp4`;
}