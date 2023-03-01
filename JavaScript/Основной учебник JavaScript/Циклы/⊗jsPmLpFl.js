"use strict";

// #1
let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}

if (flag == true) {
    console.log('+++');
} else {
    console.log('---');
}

console.log(res);

// #2
let num; // заданное число
let flag2 = true;

if (num < 2 || num % 1 != 0) {
    flag2 = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag2 = false;
            break;
        }
    }
}

if (flag2 == true) {
    console.log('число простое');
} else {
    console.log('число непростое');
}