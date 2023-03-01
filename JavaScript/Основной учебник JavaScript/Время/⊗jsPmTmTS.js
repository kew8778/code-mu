"use script";

// #1
let daysOfWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
let myBirthday = new Date(1987, 7, 7);
let dayOfWeekOfMyBirthday = daysOfWeek[myBirthday.getDay()];

console.log(dayOfWeekOfMyBirthday); // пт