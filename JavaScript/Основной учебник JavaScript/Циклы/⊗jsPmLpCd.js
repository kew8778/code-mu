"use strict";

// #1
let arr = [2, 5, 9, 15, 1, 4];

for (let elem of arr) {
    if (elem > 3 && elem < 10) {
        console.log(elem);
    }
}

// #2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

for (let key in obj) {
    if (obj[key] % 2 != 0) {
        console.log(key);
    }
}