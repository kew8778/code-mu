"use strict";

let arr = [2, -3, 5, 13, 4, 20, 0];
let res = 0;

for (let elem of arr) {
    res += elem ** 2;
}

console.log(res); // 623