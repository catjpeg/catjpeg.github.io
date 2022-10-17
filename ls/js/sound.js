var currentTrack = 0;
var track = [];
track[0] = 'https://zenmusic.me/get/music/20200401/zenmusicme_FrankJavCee_-_SimpsonWave1995_69011711.mp3';
// track[1] = 'https://cdn.discordapp.com/attachments/922512040441053197/1024387557636706404/kimetsu2.jpg';
// track[2] = 'https://cdn.discordapp.com/attachments/922512040441053197/1024387558010015805/kimetsu3.jpg';


function backgroundTracks() {
    currentTrack++;
    if(currentTrack > 2) currentTrack = 0;


    // $('#main').fadeOut(500,function() {        
        $('body').css({
            'background-image' : "url('" + track[currentTrack] + "')"
        });
        // $('#main').fadeIn(1000);
    // });

    setTimeout(backgroundTracks, 5000);
}

// $(document).ready(function() {
//     setTimeout(contributors_opacity, 5000);
// });

window.addEventListener("DOMContentLoaded", event => {
    const audio = document.querySelector("audio");
    audio.volume = 0.02;
    audio.loop = true;
    audio.play();
});