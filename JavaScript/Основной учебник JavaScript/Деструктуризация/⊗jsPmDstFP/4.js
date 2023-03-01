"use script"

// #4
function func(department, [name, surname], [year, month, day]) {
	console.log(department + ': ' + name, surname + ' - ' + year, month, day);
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] ); // development: John Smit - 2018 12 31