'use strict';

// #1
function checkDate(year, month, day) {
    let date = new Date(year, month, day);

    return (
        (date.getFullYear() == year) && 
        (date.getMonth() == month) && 
        (date.getDate() == day)
        );
}

console.log(checkDate(2025, 0, 31)); // true
console.log(checkDate(2025, 0, 32)); // false