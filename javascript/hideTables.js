'use strict';

// variable gets the day of the week to use in the if statement
var day = (moment().weekday(3).format('d'));
var weekday = parseInt(day);

function clearTable() {
    if (weekday + 14 > 16) {
        console.log('>16 third ' + weekday);
        $('#first-body').hide();
        $('#second-body').hide();
        $('#third-body').hide();
    }
    else if (weekday + 7 > 9) {
        console.log('>9 third ' + weekday);
        $('#first-body').hide();
        $('#second-body').hide();
    } else if
        (weekday > 2) {
        console.log('>2 last ' + weekday);
        $('#first-body').hide();
    };
};

clearTable();
