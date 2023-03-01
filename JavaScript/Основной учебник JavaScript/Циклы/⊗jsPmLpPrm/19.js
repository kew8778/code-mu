"use strict";

let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for (let elem of arr) {
    if (elem == 'Saturday' || elem == 'Sunday') {
        document.write('<b>' + elem + '</b>' + '<br>');   
    } else {
        document.write(elem + '<br>');
    }
}