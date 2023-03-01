"use strict";

let arr = [2, -3, 5, 13, 4, 20, 0];
let flag = false;

for (let elem of arr) {
    if (elem == 5) {
        flag = true;
        break;
    } 
}

console.log(flag); // true