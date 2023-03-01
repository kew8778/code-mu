"use strict";

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[i + 1] = arr2[i];
}

console.log(obj);