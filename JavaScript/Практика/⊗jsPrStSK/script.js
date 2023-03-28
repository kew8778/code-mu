'use strict';

const area = document.querySelector('.textarea');
const letters = document.querySelectorAll('.letter');
const digits = document.querySelectorAll('.digit');
const symbols = document.querySelectorAll('.symbol');
const enter = document.querySelector('.enter');
const backspace = document.querySelector('.backspace');
const capslk = document.querySelector('.capslk');

area.focus();

addEvents(letters);
addEvents(digits);
addEvents(symbols);

function addEvents(elems) {
    for (let elem of elems) {
        elem.addEventListener('click', function() {
            area.setRangeText(
                this.textContent, area.selectionStart, area.selectionEnd, 'end'
            );
        
            area.focus();
        });
    }
}

enter.addEventListener('click', function() {
    area.setRangeText('\n', area.selectionStart, area.selectionEnd, 'end');
    area.focus();
});

backspace.addEventListener('click', function() {
    if (area.selectionEnd === area.selectionStart && area.value.length > 0) {
        area.setRangeText('', area.selectionStart - 1, area.selectionEnd, 'end');
        area.focus();
        return;
    }
        
    area.setRangeText('', area.selectionStart, area.selectionEnd, 'end');
    area.focus();
});

capslk.addEventListener('click', function() {
    if (letters[0].textContent === letters[0].textContent.toLowerCase()) {
        for (let letter of letters) {
            letter.textContent = letter.textContent.toUpperCase();
        }
    } else {
        for (let letter of letters) {
            letter.textContent = letter.textContent.toLowerCase();
        }
    }
    
    area.focus();
});
