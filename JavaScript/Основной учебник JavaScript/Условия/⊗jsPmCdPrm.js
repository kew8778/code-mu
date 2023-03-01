"use strict";

// #1
let month = 8;

if (month == 12 || month <= 3) {
    console.log('зима');
} else if (month >= 3 || month <= 5) {
    console.log('весна');
} else if (month >= 6 || month <= 8) {
    console.log('лето');
} else {
    console.log('осень');
}

// #2
let str2 = 'abcde';

str2[0] == 'a' ? alert('да'): alert('нет'); // да

// #3
let num3 = 12345;

let first = String(num3)[0];
(first == 1 || first == 2 || first == 3) ? alert('да'): alert('нет'); // да

// #4
let num4 = 723;

let str4 = String(num4);
let sum = Number(str4[0]) + Number(str4[1]) + Number(str4[2]);
console.log(sum); // 12


// #5
let num5 = 123456;
let str5 = String(num5);
let sum1 = Number(str5[0]) + Number(str5[1]) + Number(str5[2]);
let sum2 = Number(str5[3]) + Number(str5[4]) + Number(str5[5]);

sum1 == sum2 ? alert('да'): alert('нет'); // нет