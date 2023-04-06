'use strict';

const notes = document.querySelector('.notepad__notes');
const area = document.querySelector('.notepad__area');
const btnSave = document.querySelector('.notepad__btn-save');
const btnCreate = document.querySelector('.notepad__btn-create');

let texts = [];

btnSave.addEventListener('click', function() {
    if (this.dataset.numNote) {
        saveNote();
    } else {
        createNote();
    }    
});

btnCreate.addEventListener('click', function() {
    resetClassActive();
    area.value = '';
    area.focus();
    btnSave.dataset.numNote = '';
});

function createNote() {
    const li = document.createElement('li');
    li.classList.add('notepad__note');

    texts.push(area.value);

    const numNote = texts.length;
    li.textContent = 'запись ' + numNote;
    li.dataset.numNote = numNote;

    li.addEventListener('click', outputNoteInArea);

    notes.appendChild(li);

    li.click();
}

function saveNote() {
    texts[btnSave.dataset.numNote - 1] = area.value;
}

function outputNoteInArea() {
    resetClassActive();
    this.classList.add('notepad__note__active');

    area.value = texts[this.dataset.numNote - 1];

    btnSave.dataset.numNote = this.dataset.numNote;
}

function resetClassActive() {
    for (let li of notes.children) {
        if (li.classList.contains('notepad__note__active')) {
            li.classList.remove('notepad__note__active');
        }
    }
}

area.focus();

// добавить возможность удаления записей
