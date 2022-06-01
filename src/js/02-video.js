import throttle from 'lodash.throttle';

const currentTimeKey = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

function timeUpdate(event) {
    localStorage.setItem(currentTimeKey, event.seconds);
}

player.setCurrentTime(
    localStorage.getItem(currentTimeKey) ? localStorage.getItem(currentTimeKey) : 0,
);
player.on('timeupdate', throttle(timeUpdate, 1000));