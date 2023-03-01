"use strict";

let user = {
    name: 'Пётр', 
    surname: 'Петров', 
    patronymic: 'Петрович',
};

alert(user['surname'] + ' ' + user['name'] + ' ' + user['patronymic']); // Петров Пётр Петрович