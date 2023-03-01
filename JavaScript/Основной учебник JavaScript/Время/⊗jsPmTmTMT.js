"use script";

// #1
let now = new Date();
let startDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

console.log(
    Math.floor((now - startDay) / (1000)) 
); // 45749

// #2
let midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);

console.log(
    Math.ceil((midnight - now) / (1000))
); // 40300

// #3
let nextNewYear = new Date(now.getFullYear() + 1, 0);

console.log(
    Math.ceil((nextNewYear - now) / (1000 * 60 * 60 * 24))
); // 310

// #4
let numbOfFridaysOfThirteenth = 0;

for (month = 0; month <= now.getMonth(); month++) {
    let thirteenthDay = new Date(now.getFullYear(), month, 13).getDay();

    if (thirteenthDay == 5) {
        numbOfFridaysOfThirteenth++;
    }
}

console.log(numbOfFridaysOfThirteenth); // 1

// #5
let threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3);

console.log(threeMonthsAgo.getFullYear()); // 2022

// #6
let lastDayOfThisMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);

console.log(lastDayOfThisMonth.getDay()); // 2

// #7
let leapYear = new Date(now.getFullYear(), 2, 0).getDate() == 29;

console.log(leapYear); // false

// #8
let previousLeapYear;

for (year = now.getFullYear() - 1; ; year--) {
    if (new Date(year, 2, 0).getDate() == 29) {
        previousLeapYear = year;
        break;
    }
}

console.log(previousLeapYear); // 2020

// #9
let nextLeapYear;

for (year = now.getFullYear() + 1; ; year++) {
    if (new Date(year, 2, 0).getDate() == 29) {
        nextLeapYear = year;
        break;
    }
}

console.log(nextLeapYear); // 2024