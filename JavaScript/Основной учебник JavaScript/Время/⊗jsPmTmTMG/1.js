"use script";

// #1
let toDay = new Date();

console.log(
    new Date(
        toDay.getFullYear(),
        11,
        31
        ).getDay()
); // 0