import Player from '@vimeo/player';
import Lodash from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    player.on('timeupdate', function(data) {
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time)
});
    const onTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(onTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });
