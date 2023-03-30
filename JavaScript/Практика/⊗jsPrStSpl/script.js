'use strict';

const toggles = document.querySelectorAll('.toggle');
const spoilers = document.querySelectorAll('.spoiler');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', function(event) {
        event.preventDefault();

        spoilers[i].classList.toggle('none');
    });
}
