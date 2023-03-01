"use script";

// #1
function getNumbOfLastDayOfMonth(numbMonth, year) {
    let date = new Date(year, numbMonth + 1, 0);

    return date.getDate();
}

console.log(getNumbOfLastDayOfMonth(1, 2020)); // 29

// #2
let daysOfWeek = ['вс', 'пнд', 'вт', 'ср', 'чт', 'птн', 'сб'];
let date = getNumbOfLastDayOfMonth(5, 2025);

console.log(daysOfWeek[new Date(2025, 5, date).getDay()]); // пнд