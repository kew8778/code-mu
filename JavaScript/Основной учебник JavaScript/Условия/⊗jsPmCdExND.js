"use strict";

// #1
let num1 = 1234567;
let str1 = String(num1);

if (str1[str1.length - 1] == 0) {}

// #2
let num = 1234567;
let str = String(num);
let final = str[str.length - 1];

if (final == 0  || final == 2 || final == 4 || final == 6 || final == 8) {
    console.log('число чётное');
} else {
    console.log('число нечётное');
}