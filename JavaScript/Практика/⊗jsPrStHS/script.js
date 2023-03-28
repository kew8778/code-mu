'use strict';

const events = {
    '2012': [
        {
            date: '01.02.2012',
            event: 'событие 1',
            description: 'описание события 1',
        },
        {
            date: '03.04.2012',
            event: 'событие 2',
            description: 'описание события 2',
        },
        {
            date: '06.07.2012',
            event: 'событие 3',
            description: 'описание события 3',
        },
    ],
    '2013': [
        {
            date: '05.05.2012',
            event: 'событие 4',
            description: 'описание события 4',
        },
        {
            date: '08.04.2012',
            event: 'событие 5',
            description: 'описание события 5',
        },
    ],
};

const input = document.querySelector('.events__input');
const table = document.querySelector('.events__table');
const error = document.querySelector('.events__error');

input.addEventListener('change', outputResult);

function outputResult() {
    table.innerHTML = '';

    const year = input.value;

    if (checkingForEvents(year)) {
        error.classList.add('none');
        outputEvents(year);
    } else {
        error.classList.remove('none');
    }
}

function checkingForEvents(specifiedYear) {
    for (let year in events) {
        if (year === specifiedYear) {
            return true;
        }
    }

    return false;
}

function outputEvents(specifiedYear) {
    for (let event of events[specifiedYear]) {
        const tr = document.createElement('tr');

        for (let key in event) {
            const td = document.createElement('td');
            td.textContent = event[key];
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }
}
