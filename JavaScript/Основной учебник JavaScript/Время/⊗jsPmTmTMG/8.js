'use strict';

// #8
let toDay = new Date();
let startDate = new Date(toDay.getFullYear(), 0, 1);
let endDate = new Date(toDay.getFullYear(), 8, 10);

let res = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(res); // 252