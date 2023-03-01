"use script";

// #7
let toDay = new Date();

console.log(
    new Date(
        toDay.getFullYear(),
        toDay.getMonth() - 1,
        toDay.getDate()
        ).getDay()
); // 3