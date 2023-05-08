'use strict';

const f = document.querySelector('.form');
const p = document.querySelector('.res');

const inps = f.querySelectorAll('input');

f.addEventListener('submit', (event) => {
	event.preventDefault();

    const searchParams = new URLSearchParams();
	
    for (let inp of inps) {
        searchParams.set(inp.name, inp.value);
    }

    const path = '/handler3/?' + searchParams.toString();

    fetch(path).then( (response) => response.text()
	).then( (text) => p.innerHTML = text );
});
