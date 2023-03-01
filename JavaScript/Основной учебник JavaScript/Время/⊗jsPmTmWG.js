"use script";

// #1
let weekday = new Date().getDay();

alert(weekday); // 5

// #2
if (weekday != 0 && weekday != 6) {
    console.log('рабочий день');
} else {
    console.log('выходной');
}

// #3
let daysUntilSunday = 7 - weekday; // с сегодняшним же считается?
console.log(daysUntilSunday); // 2