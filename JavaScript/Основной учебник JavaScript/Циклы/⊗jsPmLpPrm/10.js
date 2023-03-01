"use strict";

let arr = [2, -3, 5, 13, 4, 20, 1];
let res = 0;

for (let elem of arr) {
    res += elem;
}

res /= arr.length; 
console.log(res); // 6