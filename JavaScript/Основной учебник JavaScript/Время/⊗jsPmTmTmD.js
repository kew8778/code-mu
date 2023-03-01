"use script";

// #1
let date1 = new Date(1988, 2, 1);
let date2 = new Date(2000, 0, 10);

let daysApart = (date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24);
alert(daysApart); // 4332

// #2
let toDay = new Date();
let myBirthday = new Date(1987, 7, 7);

// примерный вариант:
alert(Math.floor((toDay.getTime() - myBirthday.getTime()) / (1000 * 60 * 60 * 24 * 30.4375))); // 426

// более точный:
let diffInMonthsBetweenYears = (toDay.getFullYear() - myBirthday.getFullYear()) * 12;
let diffInMonthsBetweenMonts = (toDay.getMonth() - myBirthday.getMonth());

let diffInMonthsBetweenDates = diffInMonthsBetweenYears + diffInMonthsBetweenMonts;

if (toDay.getDate() < myBirthday.getDate()) {
    diffInMonthsBetweenDates -= 1;
}

alert(diffInMonthsBetweenDates); // 426