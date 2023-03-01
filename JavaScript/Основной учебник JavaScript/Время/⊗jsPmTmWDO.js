'use strict';

// #1
let months = [
	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

let indexOfCurrentMonth = new Date().getMonth();
let nameOfCurrentMonth = months[indexOfCurrentMonth];

alert(nameOfCurrentMonth); // фев