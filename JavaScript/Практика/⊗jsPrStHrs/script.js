'use strict';

const zodiacSigns = [
    {sign: 'Овен', start: '03.21', end: '04.19'},
    {sign: 'Телец', start: '04.20', end: '05.20'},
    {sign: 'Близнецы', start: '05.21', end: '06.20'},
    {sign: 'Рак', start: '06.21', end: '07.22'},
    {sign: 'Лев', start: '07.23', end: '08.22'},
    {sign: 'Дева', start: '08.23', end: '09.22'},
    {sign: 'Весы', start: '09.23', end: '10.22'},
    {sign: 'Скорпион', start: '10.23', end: '11.21'},
    {sign: 'Стрелец', start: '11.22', end: '12.21'},
    {sign: 'Козерог', start: '12.22', end: '12.31'},
    {sign: 'Козерог', start: '01.01', end: '01.19'},
    {sign: 'Водолей', start: '01.20', end: '02.18'},
    {sign: 'Рыбы', start: '02.19', end: '03.20'},
];

const horoscopes = {
    'Овен': {
        today: 'гороскоп для Овна на сегодня',
        tomorrow: 'гороскоп для Овна на завтра',
        dayAfter: 'гороскоп для Овна на послезавтра',
    },
    'Телец': {
        today: 'гороскоп для Тельца на сегодня',
        tomorrow: 'гороскоп для Тельца на завтра',
        dayAfter: 'гороскоп для Тельца на послезавтра',
    },
    'Близнецы': {
        today: 'гороскоп для Близнецов на сегодня',
        tomorrow: 'гороскоп для Близнецов на завтра',
        dayAfter: 'гороскоп для Близнецов на послезавтра',
    },
    'Рак': {
        today: 'гороскоп для Рака на сегодня',
        tomorrow: 'гороскоп для Рака на завтра',
        dayAfter: 'гороскоп для Рака на послезавтра',
    },
    'Лев': {
        today: 'гороскоп для Льва на сегодня',
        tomorrow: 'гороскоп для Льва на завтра',
        dayAfter: 'гороскоп для Льва на послезавтра',
    },
    'Дева': {
        today: 'гороскоп для Девы на сегодня',
        tomorrow: 'гороскоп для Девы на завтра',
        dayAfter: 'гороскоп для Девы на послезавтра',
    },
    'Весы': {
        today: 'гороскоп для Весов на сегодня',
        tomorrow: 'гороскоп для Весов на завтра',
        dayAfter: 'гороскоп для Весов на послезавтра',
    },
    'Скорпион': {
        today: 'гороскоп для Скорпиона на сегодня',
        tomorrow: 'гороскоп для Скорпиона на завтра',
        dayAfter: 'гороскоп для Скорпиона на послезавтра',
    },
    'Стрелец': {
        today: 'гороскоп для Стрельца на сегодня',
        tomorrow: 'гороскоп для Стрельца на завтра',
        dayAfter: 'гороскоп для Стрельца на послезавтра',
    },
    'Козерог': {
        today: 'гороскоп для Козерога на сегодня',
        tomorrow: 'гороскоп для Козерога на завтра',
        dayAfter: 'гороскоп для Козерога на послезавтра',
    },
    'Водолей': {
        today: 'гороскоп для Водолея на сегодня',
        tomorrow: 'гороскоп для Водолея на завтра',
        dayAfter: 'гороскоп для Водолея на послезавтра',
    },
    'Рыбы': {
        today: 'гороскоп для Рыб на сегодня',
        tomorrow: 'гороскоп для Рыб на завтра',
        dayAfter: 'гороскоп для Рыб на послезавтра',
    },
};

const input = document.querySelector('.horoscope__input');
const choices = document.querySelectorAll('.horoscope__choice');
const output = document.querySelector('.horoscope__output');

input.addEventListener('change', outputHoroscope);

for (let elem of choices) {
    elem.addEventListener('click', outputHoroscope);
}

function outputHoroscope() {
    const date = input.value.split('.').reverse().join('.');
    const sign = getSign(date);
    const when = getDay();
    output.textContent = horoscopes[sign][when];
}

function getSign(date) {
    for (let sign of zodiacSigns) {
        if (date >= sign.start && date <= sign.end) {
            return sign.sign;
        }
    }
}

function getDay() {
    for (let choice of choices) {
        if (choice.checked) {
            return choice.value;
        }
    }
}
