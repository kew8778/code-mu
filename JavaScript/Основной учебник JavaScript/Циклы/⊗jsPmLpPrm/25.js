"use strict";

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];

for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}

console.log(arr1, arr2);