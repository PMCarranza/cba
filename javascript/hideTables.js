'use strict';

console.log('hidetables');

// variable gets the day of the week to use in the switch statement
var day = (moment().weekday());
console.log('day -> ' + day);

function clearTable() {
    if (day + 21 > 24 ) {
        $('#fourth-body').hide();
    } else if
        (day + 14 > 17) {
            console.log('third condition');
        $('#third-body').hide();
        $('#second-body').hide();
    } else if (day + 7 > 10) {
        $('#second-body').hide();
        $('#first-body').hide();
    } else if
        (day > 3) {
            console.log('first condition');
            $('#first-body').hide();
    };

};

clearTable();
