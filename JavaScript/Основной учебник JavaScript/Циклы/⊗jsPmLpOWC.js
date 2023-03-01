"use strict";

let str = 'abcdcbadbacd';
let obj = {};

for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] == undefined) {
        obj[str[i]] = 1;
    } else {
        obj[str[i]]++;
    }
}

console.log(obj); // {a: 3, b: 3, c: 3, d: 3}