"use script";

// #1
let date = new Date();

function addZero(num) {
	if (num >= 0 && num <= 9) {
		return '0' + num;
	} else {
		return num;
	}
}

alert(
    addZero(date.getHours()) + ':' +
    addZero(date.getMinutes()) + ':' +
    addZero(date.getSeconds()) + ' ' +
    addZero(date.getDate()) + '.' +
    addZero(date.getMonth()) + '.' +
    date.getFullYear()
); // 11:25:50 24.01.2023