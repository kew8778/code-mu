'use strict';

// #1
function isLeap(year) {
    return (new Date(year, 2, 0).getDate() == 29);
}

console.log(isLeap(2024)); // true