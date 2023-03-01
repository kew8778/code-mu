"use strict";

let test1 = 8;
let test2 = 5;

// #1
if (test1 > test2) {
    alert(test1 + ' больше ' + test2); // 8 больше 5
} else {
    alert(test1 + ' меньше или равно ' + test2); // не сработает
}

// #2
if (test1 == test2) {
    alert(test1 + ' равно ' + test2); // не сработает
} else {
    alert(test1 + ' неравно ' + test2); // 8 неравно 5
}