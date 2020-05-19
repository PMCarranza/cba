'use strict';


// variable gets the day of the week to use in the if statement
var day = (moment().weekday(2).format('DD'));

// var day = (moment().day());
console.log('day -> ' + day);

function clearTable() {
    if (day > 23) {
        console.log('>23 fourth ' + day);
        $('#fourth-body').hide();
        $('#third-body').hide();
        $('#second-body').hide();
        $('#first-body').hide();
    } else if
        (day > 16) {
        console.log('>16 second ' + day);
        // $('#third-body').hide();
        $('#second-body').hide();
        $('#first-body').hide();
    } else if (day + 9 > 9) {
        console.log('>9 third ' + day);
        $('#second-body').hide();
        $('#first-body').hide();
    } else if
        (day + 2 > 2) {
            console.log('>2 last ' + day);
            $('#first-body').hide();
    };

};

clearTable();
