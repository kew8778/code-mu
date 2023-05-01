'use strict';

// Модули CommonJs

// ⊗jsSpMCmInr #2

const {square, cube} = require('./Модули CommonJS/⊗jsSpMCmInr');

const res = square(4) + cube(2);

console.log(res); // 24

// ⊗jsSpMCmSVE

// #1
let arr = require('./Модули CommonJS/⊗jsSpMCmSVE/1');

let sum = 0;

for (let num of arr) {
    sum += num;
}

console.log(sum); // 15

// #2
require('./Модули CommonJS/⊗jsSpMCmSVE/2')(); // Экспорт одной функции

// ⊗jsSpMCmINM

const _ = require('lodash');

arr = [0, 1, false, 2, '', 3];

arr = _.compact(arr);

console.log(arr); // [1, 2, 3]
console.log(_.add(arr[1], arr[2])); // 5
