"use strict";

let arr = [2, 5, 9, 3, 1, 4];

// #1
let sum1 = 0;

for (let elem of arr) {
    sum1 += elem;
}

console.log(sum1); // 24

// #2
let sum2 = 0;

for (let elem of arr) {
    if (elem % 2 == 0) {
        sum2 += elem;
    }
}

console.log(sum2); // 6

// #3
let sum3 = 0;

for (let elem of arr) {
    if (elem % 2 == 0) {
        sum3 += elem;
    }
}

console.log(sum3); // 6

// #4
let sum4 = 1;

for (let elem of arr) {
    sum4 *= elem;
}

console.log(sum4); // 1080