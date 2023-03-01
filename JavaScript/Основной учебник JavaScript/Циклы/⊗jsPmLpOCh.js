"use strict";

// #1
let obj1 = {x: 1, y: 2, z: 3};

for (let key in obj1) {
    obj1[key] **= 2;
}

console.log(obj1); // {x: 1, y: 4, z: 9}

// #2
let obj2 = {x: 1, y: 2, z: 3};

for (let key in obj2) {
    obj2[key] += 1;
}

console.log(obj2); // {x: 2, y: 3, z: 4}