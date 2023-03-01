"use strict";

let test1 = 'Ben';
let test2 = 'Sasha';

if (test1 == test2) {
    alert('Yes, this is ' + test1); // не сработает
} else {
    alert('No, this is not ' + test1 + ', this is ' + test2); // No, this is not Ben, this is Sasha
}