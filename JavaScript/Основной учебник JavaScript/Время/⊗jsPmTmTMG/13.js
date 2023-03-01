"use script";

// #13
let now = new Date();
let thisYear = now.getFullYear();
let numbOfDaysOff = 0;

for (let year = 2000; year <= thisYear; year++) {
    let dayNewYear = new Date(year, 0, 1).getDay();

    if (dayNewYear == 0 || dayNewYear == 6) {
        numbOfDaysOff++
    }
}

console.log(numbOfDaysOff); // 8