"use strict";

// #1
let key = 'x';

let obj1 = {
    [key]: 1,
    y: 2,
    z: 3
};

// #2
let obj2 = {
	x: 1,
	y: 2,
	z: 3
};

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

obj2 = {
    [key1]: 1,
    [key2]: 2,
    [key3]: 3
};

console.log(obj2); // {x: 1, y: 2, z: 3}