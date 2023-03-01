"use strict";

// #1
let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i + 1]);
}

// #2
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

// #3
for (let i = 2; i < arr.length; i++) {
    console.log(arr[i - 2] + ', ' + arr[i - 1]);
}

// #4
for (let i = 2; i < arr.length; i++) {
    console.log((arr[i - 2] + arr[i - 1]) + ', ' + arr[i]);
}

// #5
for (let i = 1; i < arr.length - 1; i++) {
    console.log(arr[i - 1] + arr[i] + arr[i + 1]);
}