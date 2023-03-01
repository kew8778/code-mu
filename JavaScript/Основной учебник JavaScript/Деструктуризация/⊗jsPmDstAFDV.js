"use script"

// #1
function func() {
	return (new Date).getDate();
}

let [year = (new Date).getFullYear(), month = (new Date).getMonth(), day = func()] = arr;