'use strict';

const input = document.querySelector('.search-tag__input');
const output = document.querySelector('.search-tag__output');

const tags = {
    'p': 'абзац',
    'h1': 'заголовок 1-ого уровня',
    'h2': 'заголовок 2-ого уровня',
    'h3': 'заголовок 3-ого уровня',
    'h4': 'заголовок 4-ого уровня',
    'h5': 'заголовок 5-ого уровня',
    'h6': 'заголовок 6-ого уровня',
    'a': 'ссылка',
    'br': 'разрыв строки',
    'ul': 'неупорядоченный список',
    'ol': 'упорядоченный список',
    'li': 'пункт списка',
    'img': 'картинка',
    'div': 'блок',
    'span': 'текстовый блок',
    'b': 'жирный текст',
    'i': 'курсивный текст',
    'strong': 'важный тест, выделенный жирным',
    'em': 'важный текст, выделенный курсивом',
    's': 'перечеркнутый текст',
    'hr': 'разделительная линия',
};

input.addEventListener('change', searchTag);

function searchTag() {
    const desiredTag = input.value;

    for (let tag in tags) {
        if (tag === desiredTag) {
            output.textContent = tags[tag];
            break;
        }
        
        output.textContent = 'искомого тега нет в базе';
    }
}
