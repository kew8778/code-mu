'use strict';

// #1
const inp1 = document.querySelector('.num1');
const inp2 = document.querySelector('.num2');
const btn1 = document.querySelector('.sum');
const p1 = document.querySelector('.res');

btn1.addEventListener('click', () => {
    const num1 = inp1.value;
	const num2 = inp2.value;

	const param = '?num1=' + num1 + '&num2=' + num2;

    fetch('/handler1/' + param).then( (response) => {
			return response.text();
		}).then( (text) => {
			p1.innerHTML = text;
		}
	);
});

// #2
const btn2 = document.querySelector('.btn2');
const p2 = document.querySelector('.elemArr');

btn2.addEventListener('click', () => {
	fetch('/handler2/?num=2').then( (response) => {
			return response.text();
		}).then( (text) => {
			p2.innerHTML = text;
		}
	);
});
