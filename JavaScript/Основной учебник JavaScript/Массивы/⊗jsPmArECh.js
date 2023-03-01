"use strict";

// #1
let arr1 = ['a', 'b', 'c'];

arr1[0] = 1;
arr1[1] = 2;
arr1[2] = 3;

console.log(arr1); // [1, 2, 3]

// #2
let arr2 = [1, 2, 3];

arr2[0] += 3;
arr2[1] += 3;
arr2[2] += 3;

alert(arr2); // 4,5,6

// #3
let arr3 = [1, 2, 3];

++arr3[0];
++arr3[1];
++arr3[2];

console.log(arr3); // [2, 3, 4]