'use strict';

// #4
let toDay = new Date();

console.log(
    new Date(
        toDay.getFullYear() + 1,
        toDay.getMonth(),
        toDay.getDate()
        ).getDay()
); // 0