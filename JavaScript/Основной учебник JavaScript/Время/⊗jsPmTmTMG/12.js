'use strict';

// #12
let now = new Date();
let endOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let hourIsNow = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());

let res = (endOfToday - hourIsNow) / (1000 * 60 * 60);
console.log(res); // 13