"use strict";

let obj = {x: 1, y: 2, z: 3};

// #1
console.log(obj.x);

// #2
let key = 'x';
console.log(obj[key]);

// #3
let sum = obj.x + obj.y + obj.z;
console.log(sum);

// #4
console.log(Object.keys(obj).length);