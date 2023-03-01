"use strict";

let obj = {x: 1, y: 2, z: 3};

// #1
for (let key in obj) {
    console.log(key);
}

// #2
for (let key in obj) {
    console.log(obj[key]);
}