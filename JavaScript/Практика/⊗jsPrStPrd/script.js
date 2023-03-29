'use strict';

const predictions = [
    'у вас сегодня будет замечательный день',
    'сегодня лучше не выходите из дома',
    'сегодня вас ждет удача и успех во всех начинаниях',
    'сегодня лучше полежите весь день на диване',
    'сегодня вас ждет успех при изучении JavaScript',
    'сегодня вы рискуете что-нибудь забыть при выходе из дома',
];

const btn = document.querySelector('.prediction__btn');
const text = document.querySelector('.prediction__text');

btn.addEventListener('click', startTimer);

let timerId;

function startTimer() {
    this.removeEventListener('click', startTimer);
    timerId = setInterval(outputNumsPrediction, 100);
    btn.textContent = 'получить предсказание';
    this.addEventListener('click', outputPrediction);
}

let i = 1;

function outputNumsPrediction() {
    text.textContent = i;
    
    if (i < predictions.length) {
        i++;
    } else {
        i = 1;
    }
}

function outputPrediction() {
    clearInterval(timerId);
    btn.remove();
    const numPrediction = +text.textContent - 1;
    text.textContent = predictions[numPrediction];
    paintPrediction(numPrediction);
}

function paintPrediction(num) {
    if (num % 2 === 0) {
        text.classList.add('good');
    } else {
        text.classList.add('bad');
    }
}
