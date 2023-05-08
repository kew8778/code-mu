'use strict';

// #1
const form = document.querySelector('.form');
const res = document.querySelector('.res');

form.addEventListener('submit', (event) => {
    event.preventDefault();

	fetch('/handler4/', {
		method: 'POST',
		body: new FormData(form),
	}).then(
		(response) => {
			return response.text();
		}
	).then(
		(text) => {
			res.innerHTML = text;
		}
	);
});

// #2
let obj = {
	a: 1,
	b: 2,
	c: 3,
    d: 4,
    e: 5,
}

const formData = new FormData();

for (let key in obj) {
    formData.set(key, obj[key]);
}

fetch('/handler4/', {
    method: 'POST',
    body: formData,
}).then(
    (response) => {
        return response.text();
    }
).then(
    (text) => {
        res.innerHTML = text;
    }
);
