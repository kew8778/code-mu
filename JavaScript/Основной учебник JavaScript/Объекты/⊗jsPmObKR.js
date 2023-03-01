"use strict";

// #1
let obj1 = {
'1a': 1, // нужны
'b2': 2, // необязательно
'с-с': 3, // нужны
'd 4': 4, // нужны
'e5': 5 // необязательно
};

// #2
let obj2 = {
	'1a': 1,
	b2: 2,
	'c-c': 3,
	'd 4': 4,
	e5: 5
};

console.log(obj2['1a']);
console.log(obj2.b2);
console.log(obj2['c-c']);
console.log(obj2['d 4']);
console.log(obj2.e5);