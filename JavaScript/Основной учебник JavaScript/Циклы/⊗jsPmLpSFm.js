"use strict";

// #1
let res1 = '';

for (let i = 1; i <= 5; i++) {
    res1 += '-';
}

console.log(res1); // -----

// #2
let res2 = '';

for (let i = 1; i <= 9; i++) {
    res2 += i;
}

console.log(res2); // 123456789

// #3
let res3 = '';

for (let i = 9; i >= 1; i--) {
    res3 += i;
}

console.log(res3); // 987654321

// #4
let res4 = '-';

for (let i = 1; i <= 9; i++) {
    res4 += i + '-';
}

console.log(res4); // -1-2-3-4-5-6-7-8-9-