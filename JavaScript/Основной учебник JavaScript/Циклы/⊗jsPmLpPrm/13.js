"use strict";

let arr = [-4, 7, 5, -8, -1];
let res = 0;

for (let elem of arr) {
    if (elem > 0) {
        res += elem;
    }
}

console.log(res); // 12