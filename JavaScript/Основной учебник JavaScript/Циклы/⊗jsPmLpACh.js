"use strict";

// #1
let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
	arr1[i] **= 2;
}

console.log(arr1); // [1, 4, 9, 16, 25]

// #2
let arr2 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr2.length; i++) {
	arr2[i] -= 1;
}

console.log(arr2); // [0, 1, 2, 3, 4]

// #3
let arr3 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr3.length; i++) {
	arr3[i] += 10;
}

console.log(arr3); // [11, 12, 13, 14, 15]