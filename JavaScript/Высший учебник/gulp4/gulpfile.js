'use strict';

const {src, dest, series, parallel, watch} = require('gulp');

const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');

function task(cb) { // основная задача
	today(cb); // приват задачи внутри основной, exports не нужен
    hours(cb); // см выше )
	cb(); // завершение задачи, если нет return
}

function today(cb) {
    console.log(new Date().getDate());
    cb();
}

function hours(cb) {
    console.log(new Date().getHours());
    cb();
}

function groupTasks(cb) {
    today(cb); // приват задачи внутри основной, exports не нужен
    hours(cb); // см выше )
	cb();
}

function imp(cb) {
    const files = ['css/1.css', 'css/2.css'];

    return src('css/*.css')
		.pipe(concat('res.css'))
		.pipe(dest('copy'));
}

exports.default = task; // основная задача, вызывается gulp

exports.gr = groupTasks; // публичные задачи, вызов gulp gr
exports.sv = series(hours, today);
exports.imp = imp;
exports.avtoimp = function() {watch('css/*.css', imp)}
