'use strict';
// #11
let now = new Date();
let beginningOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
let hourIsNow = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());

let res = (hourIsNow - beginningOfToday) / (1000 * 60 * 60);
console.log(res); // 11