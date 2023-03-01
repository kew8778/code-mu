"use strict";

// #1
let res1 = 0;

for (let i = 2; i <= 100; i += 2) {
    res1 += i;
}

console.log(res1); // 2550

// #2
let res2 = 0;

for (let i = 1; i <= 99; i += 2) {
    res2 += i;
}

console.log(res2); // 2500

// #3
let res3 = 1;

for (let i = 1; i <= 20; i++) {
    res3 *= i;
}

console.log(res3); // 2432902008176640000