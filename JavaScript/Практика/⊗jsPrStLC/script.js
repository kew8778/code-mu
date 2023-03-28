'use strict';

const dates = document.querySelectorAll('.calendar__date');
const month = document.querySelector('.calendar__month');
const year = document.querySelector('.calendar__year');
const previousMonth = document.querySelector('.calendar__link__previous-month');
const nextMonth = document.querySelector('.calendar__link__next-month');

const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
];

const currentDate = new Date();
setSpecifiedMonth(currentDate);

function setSpecifiedMonth(date) {
    const specifiedMonth = date.getMonth();
    month.textContent = months[specifiedMonth];

    const specifiedYear = date.getFullYear();
    year.textContent = specifiedYear;

    setValidDatesOfMonth(specifiedYear, specifiedMonth);
    underlineCurrentDate(specifiedYear, specifiedMonth);
}

function setValidDatesOfMonth(year, month) {
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 28; i <= 31; i++) {
        if (i <= lastDateOfMonth) {
            dates[i - 1].classList.remove('none');
        } else {
            dates[i - 1].classList.add('none');
        }
    }
}

function underlineCurrentDate(year, month) {
    if (
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth()
    ) {
        dates[currentDate.getDate() - 1].classList.add('date-now');
    } else {
        dates[currentDate.getDate() - 1].classList.remove('date-now');
    }
}

let date = currentDate;

previousMonth.addEventListener('click', function(event) {
    event.preventDefault();

    date = new Date(date.getFullYear(), date.getMonth() - 1);
    setSpecifiedMonth(date);
});

nextMonth.addEventListener('click', function(event) {
    event.preventDefault();

    date = new Date(date.getFullYear(), date.getMonth() + 1);
    setSpecifiedMonth(date);
});
