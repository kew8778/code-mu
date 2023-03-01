"use strict";

let arr = [1, 20, 3, 50, 235, 6];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == i + 1) {
        document.write(arr[i] + ' ');
    }
}