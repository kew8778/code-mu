'use strict';

const btnStart = document.getElementById('start');
const checkRes = document.getElementById('checkRes');
const hiddenNum = document.getElementById('hiddenNum');
const pForInp = document.getElementById('forInp');
const inp = document.getElementById('inp');
const btnCheck = document.getElementById('check');

btnStart.addEventListener('click', startGame);
btnCheck.addEventListener('click', checkValue);

function startGame() {
    showElem(hiddenNum);
    hiddenNum.classList.remove('show');

    showElem(checkRes);
    toChangeText(checkRes, 'число от 1 до 100');

    showElem(pForInp);
    inp.value = '';

    showElem(btnCheck);
    toChangeText(btnStart, 'Рестарт');

    thinkingNum();
}

function showElem(elem) {
    elem.classList.remove('none');
}

function toChangeText(elem, text) {
    elem.textContent = text;
}

function thinkingNum() {
    const num = Math.floor(Math.random() * 100) + 1;
    toChangeText(hiddenNum, num);
}

function checkValue() {
    if(inp.value < hiddenNum.textContent) {
        toChangeText(checkRes, 'введите число побольше');
    } else if (inp.value > hiddenNum.textContent) {
        toChangeText(checkRes, 'введите число поменьше');
    } else {
        congratulate();
    }
}

function congratulate() {
    hideElem(pForInp);
    toChangeText(checkRes, 'Вы угали !!!');
    hiddenNum.classList.add('show');
    hideElem(btnCheck);
}

function hideElem(elem) {
    elem.classList.add('none');
}