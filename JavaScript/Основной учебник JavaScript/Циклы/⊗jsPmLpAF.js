"use strict";

// #1
let arr1 = [];

for (let i = 1; i <= 10; i++) {
	arr1.push(i);
}

console.log(arr1); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// #2
let arr2 = [];

for (let i = 1; i <= 10; i++) {
	arr2.push('x');
}

console.log(arr2); // ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']

// #3
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arrNew = [];

for (let arrElem of arr3) {
	if (arrElem % 2 == 0) {
        arrNew.push(arrElem);
    }
}

console.log(arrNew); // [2, 4, 6, 8, 10]