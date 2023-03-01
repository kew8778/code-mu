"use strict";

// #1, #2
let day = 14;

if ((day % 1 != 0) || (day < 1) || (day > 31)) {
    console.log('invalid value');
} else if ((day >= 1) && (day <= 10)) {
    console.log('the first decade of the month');
} else if ((day > 10) && (day <= 20)) {
    console.log('the second decade of the month');
} else if ((day > 20) && (day <= 31)) {
    console.log('the third decade of the month');
}