'use strict';

const inp = document.querySelector('.checklist__inp');
const ul = document.querySelector('.checklist__list');

inp.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addLi();
    }
});

function addLi(elem) {
    const li = document.createElement('li');
    li.classList.add('list__item', 'item');

    addSpan(li, 'item__task', inp.value, 'dblclick', editTask);
    addSpan(li, 'item__done', 'сделанно', 'click', markTaskDone);
    addSpan(li, 'item__remove', 'удалить', 'click', removeTask);

    inp.value = '';

    ul.appendChild(li);
}

function addSpan(parent, css, text, event, func) {
    const span = document.createElement('span');
    span.classList.add(css);
    span.textContent = text;
    span.addEventListener(event, func);

    parent.appendChild(span);
}

function editTask() {
    const self = this;

    let taskText = self.textContent;
    self.textContent = '';

    const inpForEdit = document.createElement('input');
    inpForEdit.value = taskText;

    inpForEdit.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            self.textContent = this.value;
        }
    });

    self.appendChild(inpForEdit);
    inpForEdit.focus();
}

function markTaskDone() {
    const task = this.parentElement.querySelector('.item__task');
    task.classList.add('item__task__done');
}

function removeTask() {
    this.parentElement.remove();
}
