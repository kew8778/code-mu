"use strict";

let test1 = true;
let test2 = true;
let test3 = true;

// #1
if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

// #2
if (test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

// #3
if (!test1 && !test2) {
	console.log('+++');
} else {
	console.log('---');
}

// #4
if (test1 && test2) {
	console.log('+++');
} else {
	console.log('---');
}

// #5
if (test1 && test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

// #6
if (test1 || test2 && test3) {
	console.log('+++');
} else {
	console.log('---');
}

// #7
if (test1 || !test2 && !test3) {
	console.log('+++');
} else {
	console.log('---');
}
