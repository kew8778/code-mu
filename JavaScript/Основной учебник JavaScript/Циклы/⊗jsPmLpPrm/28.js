"use strict";

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
let i = 1;

for (let elem of arr) {
    obj[elem] = i;
    i++
}

console.log(obj); // {a: 1, b: 2, c: 3, d: 4, e: 5}