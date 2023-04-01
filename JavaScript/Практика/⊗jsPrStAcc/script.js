'use strict';

const links = document.querySelectorAll('.tab__link');

for (let link of links) {
    link.addEventListener('click', toggleTab);
}

function toggleTab(event) {
    event.preventDefault();

    const parent = this.closest('.accordion__tab');
    const active = document.querySelector('.accordion__tab__active');

    if (parent === active || active === null) {
        parent.classList.toggle('accordion__tab__active');
    } else {
        active.classList.remove('accordion__tab__active');
        parent.classList.add('accordion__tab__active');
    }
}
