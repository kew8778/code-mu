"use strict";

let num = 77;

if ((num >= 10) && (num <= 99)) {
    let sum = Number(String(num)[0]) + Number(String(num)[1]);
    if (sum <= 9) {
        alert('сумма цифр однозначна');
    } else {
        alert('сумма цифр двузначна');
    }
}