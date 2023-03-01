"use strict";

// #1
let arr1 = [3, 6, 9, 0, 7, 5];

for (let elem of arr1) {
    console.log(elem);
    if (elem == 0) {
        break;
    }
}

// #2
let arr2 = [4, 6, 8, -1, 7, 5];
let res2 = 0;

for (let elem of arr2) {
    res2 += elem;
    if (elem < 0) {
        break;
    }
}

console.log(res2); // 17

// #3
let arr3 = [4, 6, 8, 3, 7, 5];
let i = 0;

for (let elem of arr3) {
    i++;
    if (elem == 3) {
        console.log('Элемент "' + elem + '" на ' + i + ' позиции в массиве');
        break;
    }
}

// #4
let res4 = 0;

for (let i = 1; ; i++) {
    res4 += i;
    if (res4 > 100) {
        console.log(i); // 14
        break;
    } 
}