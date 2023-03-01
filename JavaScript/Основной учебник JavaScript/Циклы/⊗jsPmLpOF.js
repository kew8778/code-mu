"use strict";

// #1
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj1 = {};

for (let i = 0; i <= 6; i++) {
    obj1[arr1[i]] = arr2[i];
}

console.log(obj1);

// #2
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objNew1 = {};

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        objNew1[key] = obj[key];
    }
}

console.log(objNew1); // {b: 2, d: 4}

// #3
let objNew2 = {};

for (let key in obj) {   
    objNew2[obj[key]] = key;
}

console.log(objNew2); // {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'}