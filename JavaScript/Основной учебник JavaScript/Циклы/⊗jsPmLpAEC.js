"use strict";

// #1
let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
    if (elem == 3) {
        counter++;
    }
}

console.log(counter); // 4

// #2
let counterOfTriples = 0;
let counterOfTwos = 0;

for (let elem of arr) {
    if (elem == 3) {
        counterOfTriples++;
    }
    if (elem == 2) {
        counterOfTwos++;
    }
}

console.log(counterOfTriples); // 4
console.log(counterOfTwos); // 3