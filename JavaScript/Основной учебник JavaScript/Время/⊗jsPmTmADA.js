'use strict';

// #1
console.log(new Date(2018, 1, 35)); // 7 марта 2018

// #2
console.log(new Date(2018, 15, 1)); // 1 апреля 2019

// #3
console.log(new Date(2018, 3, 31)); // 1 мая 2018

// #4
console.log(new Date(2018, 1, 31)); // 3 марта 2018

// #5
console.log(new Date(2018, 12, 33)); // 2 февраля 2019

// #6
console.log(new Date(2018, 33, 33)); // 2ноября 2020

// #7
console.log(new Date(2018, 5, 0)); // 31 мая 2018

// #8
console.log(new Date(2018, 0, 0)); // 31 декабря 2017

// #9
console.log(new Date(2018, -12, -33)); // 28 ноября 2016

// #10
console.log(new Date(2018, 0, 1, 23, 0, 60)); // 1 января 2018 в 23:01:00

// #11
console.log(new Date(2018, 0, 1, 23, 60, 0)); // 2 января 2018 в 00:00:00

// #12
console.log(new Date(2018, 0, 1, 100, 100, 100)); // 5 января 2018 в 05:41:40
