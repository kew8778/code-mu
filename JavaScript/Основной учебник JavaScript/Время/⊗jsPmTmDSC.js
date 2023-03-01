'use strict';

// #1
let date1 = '2020-11-31';
let date2 = '2020-12-01';

function compareDates(date1, date2) {
    if (date1 > date2) {
        alert(date1 + ' больше, чем ' + date2);
    } else if (date1 < date2) {
        alert(date1 + ' меньше, чем ' + date2);
    } else {
        alert(date1 + ' и ' + date2 + ' равны');
    }
}

compareDates(date1, date2);

// #2
date1 = '09-21';
date2 = '09-23';

compareDates(date1, date2);

// #3
let date = '08-07';

let zodiacSigns = {
    'Козерог': ['01-01', '01-20'],
    'Водолей': ['01-21', '02-19'],
    'Рыбы': ['02-20', '03-20'],
    'Овен': ['03-21', '04-20'],
    'Телец': ['04-21', '05-21'],
    'Близнецы': ['05-22', '06-21'],
    'Рак': ['06-22', '07-22'],
    'Лев': ['07-23', '08-21'],
    'Дева': ['08-22', '09-23'],
    'Весы': ['09-24', '10-23'],
    'Скорпион': ['10-24','11-22'],
    'Стрелец': ['11-23', '12-22'],
    'Козерог': ['12-23', '12-31'],
};

for (let sign in zodiacSigns) {
    if (date >= zodiacSigns[sign][0] && date <= zodiacSigns[sign][1]) {
        console.log(sign);
        break;
    }
}