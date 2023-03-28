'use strict';

/*
для себя:
нужно придумать другой метод отметки рандомных ячеек,
добавить к кнопке события стоп, рестарт 
*/

const btn = document.querySelector('button');
const tds = document.querySelectorAll('td');
const endGame = document.querySelector('.game-end');
const foundСells = document.querySelector('.found-cells');
const countdown = document.querySelector('.countdown');
let timerId;

btn.addEventListener('click', startGame);

function startGame() {
    resetPreviousGame();
    markCells();
    addEventForCells();
    clearInterval(timerId);
    startСounter();
}

function markCells() {
    const randomCells = getRandomСells();

    for (let cell of randomCells) {
        tds[cell].textContent = '$$$';
    }
}

function getRandomСells() {
    const randomCells = [];

    while (randomCells.length < 10) {
        const cellNum = getRandomInt(0, 99);

        if (randomCells.includes(cellNum)) {
            continue;
        } else {
            randomCells.push(cellNum);
        }
    }

    return randomCells;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function addEventForCells() {
    for (let td of tds) {
        td.addEventListener('click', visitCell);
    }
}

function visitCell() {
    this.classList.add('show-td');

    if (this.textContent === '$$$') {
        foundСells.textContent = +foundСells.textContent + 1;
    }

    if(isFoundAllCells()) {
        finishGame();
    }
}

function isFoundAllCells() {
    return (foundСells.textContent === '10');
}

function startСounter() {
        timerId = setInterval(function() {
        countdown.textContent = +countdown.textContent - 1;
        
        if (isTimeOver() || isFoundAllCells())  {
            clearInterval(timerId);
            finishGame();
        }
    }, 1000);
}

function isTimeOver() {
    return (countdown.textContent <= 0);
}

function finishGame() {
    removeEventForCells();
    outputResult();
}

function removeEventForCells() {
    for (let td of tds) {
        td.removeEventListener('click', visitCell);
    }
}

function outputResult() {
    if (isFoundAllCells()) {
        endGame.innerHTML = 'Поздравляем !!!<br>Вы нашли все ячейки';
        return;
    }

    endGame.innerHTML = 'Упссс, время вышло,<br>попробуйте ещё раз';
}

function resetPreviousGame() {
    for (let td of tds) {
        td.textContent = '';
        td.classList.remove('show-td');
    }

    endGame.textContent = '';
    foundСells.textContent = '0';
    countdown.textContent = '60';
}
