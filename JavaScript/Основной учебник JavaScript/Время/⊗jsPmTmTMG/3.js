"use script";

// #3
let toDay = new Date();

console.log(
    new Date(
        toDay.getFullYear() + 1,
        11,
        31
        ).getDay()
); // 2