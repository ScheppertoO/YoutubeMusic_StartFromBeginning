// ==UserScript==
// @name         YT Music: Always Start Songs at Beginning
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Start songs always at 0:00 on music.youtube.com (web). Youtube saves the time you last ended the song and will return to that point.
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function resetOnPlay() {
        const audio = document.querySelector('audio');
        if (!audio) return;

        audio.addEventListener('play', function() {
            // If start time != 0 
            if (audio.currentTime > 1) {
                audio.currentTime = 0;
            }
        });
    }

    // Site loaded and music found 
    let timer = setInterval(() => {
        if (document.querySelector('audio')) {
            clearInterval(timer);
            resetOnPlay();
        }
    }, 300);

})();
