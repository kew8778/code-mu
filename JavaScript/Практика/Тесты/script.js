'use strict';

const titleOfTest = 'Заголовок теста';

const questions = [
	{
		text: 'вопрос 1?',
		right: 1,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3',
		],
	},
	{
		text: 'вопрос 2?',
		right: 3,
		variants: [
			'вариант 1',
			'вариант 2',
			'вариант 3',
            'вариант 4',
		],
	},
	{
		text: 'вопрос 3?',
		right: 2,
		variants: [
			'вариант 1',
			'вариант 2',
		],
	},
];

const divTest = document.querySelector('.test');

const h1Test = divTest.querySelector('.test__title');
const divTestQuestions = divTest.querySelector('.test__questions');
const btn = divTest.querySelector('.test__btn');

setTitleOfTest(titleOfTest);
outputQuestions(questions);
btn.addEventListener('click', outputResult);

function setTitleOfTest(title) {
    h1Test.textContent = title;
}

function outputQuestions(arrQuestionsData) {
    let numOfQuestion = 1;

    for (let obj of arrQuestionsData) {
        outputQuestionText(obj.text);
        outputResponseOptions(numOfQuestion, obj.variants, obj.right);
        numOfQuestion++;
    }
}

function outputQuestionText(questionText) {
    const p = document.createElement('p');
    p.textContent = questionText;
    divTestQuestions.appendChild(p);
}

function outputResponseOptions(name, arrVariants, numRight) {
    for (let i = 1; i <= arrVariants.length; i++) {
        const label = document.createElement('label');

        const inp = document.createElement('input');
        inp.type = 'radio';
        inp.name = name;

        if (i === numRight) {
            inp.dataset.right = 'correct';
        }

        label.appendChild(inp);
        label.insertAdjacentText('beforeend', arrVariants[i - 1]);

        divTestQuestions.appendChild(label);
    }
}

function outputResult() {
    const inps = divTestQuestions.querySelectorAll('input');

    for (let inp of inps) {
        if (inp.dataset.right === 'correct' && inp.checked) {
            inp.parentElement.classList.add('right');
        }

        if (inp.checked && inp.dataset.right !== 'correct') {
            inp.parentElement.classList.add('wrong');
        }
    }
}
