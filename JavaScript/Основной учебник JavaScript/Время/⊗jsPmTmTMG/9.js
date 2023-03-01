'use strict';

// #9
let toDay = new Date();
let startDate = new Date(toDay.getFullYear(), toDay.getMonth(), 20);
let endDate = new Date(toDay.getFullYear(), (toDay.getMonth() + 1), 10);

let res = (endDate - startDate) / (1000 * 60 * 60 * 24);
console.log(res); // 18