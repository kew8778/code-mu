"use strict";

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] = obj[key] / 100 * 110;
    }
}