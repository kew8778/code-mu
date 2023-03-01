"use script";

// #1
let date1 = new Date(2000, 8, 1);
let date2 = new Date(2010, 1, 15);

alert(date2 - date1); // 298429200000

// #2
let millisecPerDay = 1000 * 60 * 60 * 24;

alert(Math.floor((date2 - date1) / millisecPerDay)); // 3454

// #3
let millisecPerMonth = millisecPerDay * 30.4375;

alert(Math.floor((date2 - date1) / millisecPerMonth)); // 113

// #4
let millisecPerYear = millisecPerMonth * 12;

alert(Math.floor((date2 - date1) / millisecPerYear)); // 9