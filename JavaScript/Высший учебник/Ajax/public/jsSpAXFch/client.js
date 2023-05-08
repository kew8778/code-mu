'use strict';

const block = document.querySelector('.content');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');

btn1.addEventListener('click', () => outputPage('./pages/page1.html'));
btn2.addEventListener('click', () => outputPage('./pages/page2.html'));
btn3.addEventListener('click', () => outputPage('./pages/page3.html'));

async function outputPage(url) {
    const response = await fetch(url);
    const text = await response.text();
    block.innerHTML = text;
}

// #2
const btn4 = document.querySelector('.btn4');

const pages = [
    './pages/page1.html',
    './pages/page2.html',
    './pages/page3.html',
    './pages/page4.html',
    './pages/page5.html',
];

let i = 0;

btn4.addEventListener('click', () => {
    outputPage(pages[i]);
    i++;

    if (i > pages.length - 1) {
        i = 0;
    }
});
