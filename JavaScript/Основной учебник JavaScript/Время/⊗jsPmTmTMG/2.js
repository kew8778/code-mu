"use script";

// #2
let toDay = new Date();

console.log(
    new Date(
        toDay.getFullYear(),
        toDay.getMonth(),
        1
        ).getDay()
); // 3