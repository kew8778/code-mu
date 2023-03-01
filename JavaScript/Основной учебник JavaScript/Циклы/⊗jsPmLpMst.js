"use strict";

// #1
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// #2, #3
for (let i = 10; i >= 0; i--) {
    console.log(i);
}

// #4
let i = 0;

while (i <= 10) {
    console.log(i);
    i++;
}

// #5
let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res); // 55

// #6
let res = 1;

for (let i = 1; i <= 10; i++) {
    res *= i;
}

console.log(res); // 3628800

// #7
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += Number(elem);
}

console.log(sum); // 15

// #8, #9
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum); // 15

// #10, #11, #12
let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum); // 15

// #13
let arr = [1, 2, 3, 4, 5];
let i = 0;

for (let elem of arr) {
    elem = elem ** 2;
    arr[i] = elem;
    i++
}

console.log(arr); // [1, 4, 9, 16, 25]

// #14
let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr); // [1, 2, 3, 4, 5]

// #15, #16
let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
    sum += obj[key];
}

console.log(sum); // 6

// #17
let arr = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr) {
    if (elem === 3) {
	flag = true;
        break;
    }
}

if (flag == true) {
    console.log('+++');
} else {
    console.log('---');
}

// #18
let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}

console.log(arr); // [1, 2, 3, 4, 5]

// #19
let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
	res = true;
	break;
    }
}

console.log(res); // true

// #20
let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 == 0) {
	console.log(elem);
    }
}

// #21
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = [];

for (let elem of arr) {
    if (elem % 2 != 0) {
	res.push(elem);
    }
}

console.log(res); // [1, 3, 5, 7, 9]