import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on('timeupdate', onPlay);
function onPlay(event) {
    localStorage.setItem("videoplayer-current-time",event.seconds)
}
 player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))       
