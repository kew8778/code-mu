"use strict";

let arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
        document.write(elem + ' '); // 10 20 50 235
    }
}