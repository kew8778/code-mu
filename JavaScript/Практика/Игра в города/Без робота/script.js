'use strict';

const inp = document.querySelector('.game__inp');
const message = document.querySelector('.game__message');

const cities = [];
const messages = [
    'Зачтено',
    'Этот город уже был',
    'Город должен начинаться на ',
];

inp.addEventListener('change', function() {
    const city = this.value;
    this.value = '';

    message.textContent = getMessage(city);
    message.classList.remove('game__message__error'); // сброс цвета ошибки

    if (message.textContent === messages[0]) {
        addCityToArr(city);
    } else {
        message.classList.add('game__message__error');
    }
});

function getMessage(city) {
    if (cities.length !== 0) {
        if (city[0] !== getlastLetterOfLastCity().toUpperCase()) {
            return messages[2] + getlastLetterOfLastCity().toUpperCase();
        }

        if (cities.includes(city)) {
            return messages[1];
        }

        return messages[0];
    }

    return messages[0];
}

function addCityToArr(city) {
    cities.push(city);
}

function getlastLetterOfLastCity() {
    const lastCity = cities[cities.length - 1];

    return lastCity[lastCity.length - 1];
}
