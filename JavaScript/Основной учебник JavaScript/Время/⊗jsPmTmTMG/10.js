'use strict';

// #10
let toDay = new Date();
let startDate = new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate() - 1, 12);
let endDate = new Date(toDay.getFullYear(), toDay.getMonth(), toDay.getDate(), toDay.getHours());

let res = (endDate - startDate) / (1000 * 60 * 60);
console.log(res); // 21