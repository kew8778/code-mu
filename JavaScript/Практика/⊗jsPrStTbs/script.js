'use strict';

const links = document.querySelectorAll('.menu__link');
const tabs = document.querySelectorAll('.tabs__tab');

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();

        showTab(i);
    });
}

function showTab(index) {
    for (let i = 0; i < links.length; i++) {
        if (i === index) {
            links[i].classList.add('menu__link__active');
            tabs[i].classList.add('tabs__tab__active');
        } else {
            links[i].classList.remove('menu__link__active');
            tabs[i].classList.remove('tabs__tab__active');
        }
    }
}
