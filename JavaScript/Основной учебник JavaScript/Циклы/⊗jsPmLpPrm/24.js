"use strict";

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
let sumKey = 0;
let sumElem = 0;

for (let key in obj) {
    sumKey += +key;
    sumElem += obj[key];
}

let res = sumKey / sumElem;
console.log(res); // 0.375