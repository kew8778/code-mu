"use strict";

// #1
for (let i = 10; i <= 1000; i++) {
    console.log(String(i)[0]);
}

// #2
for (let i = 10; i <= 1000; i++) {
    console.log(Number(String(i)[0]) + Number(String(i)[1]));
}

// #3
for (let i = 10; i <= 1000; i++) {
    if (String(i)[0] == 1) {
        console.log(i);
    }
}

// #4
for (let i = 10; i <= 1000; i++) {
    if (Number(String(i)[0]) + Number(String(i)[1]) == 5) {
        console.log(i);
    }
}