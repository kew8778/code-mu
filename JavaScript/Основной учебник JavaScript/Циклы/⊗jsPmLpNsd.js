"use strict";

// #1
for (let i = 1; i <= 9; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(i); // 111222333444555666777888999
	}
}

// #2
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		document.write(String(i) + String(j) + ' '); // 11 12 13 21 22 23 31 32 33
	}
}