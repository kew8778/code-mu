'use strict';

;(function() {
function avg1(arr) {
	return sum(arr, 1) / arr.length;
}

function avg2(arr) {
	return sum(arr, 2) / arr.length;
}

function avg3(arr) {
	return sum(arr, 3) / arr.length;
}

// вспомогательная функция
function sum(arr, pow) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem ** pow;
	}
	
	return res;
}

window.avgs = {avg1, avg2, avg3};
})();