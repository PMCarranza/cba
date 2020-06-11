'use strict';

// variable gets the day of the week to use in the if statement
var day = (moment().weekday(2).format('d'));
// console.log('weekday - > ' + day);

var firstTuesday = moment().startOf('month').startOf('week').add(2, 'd');
// console.log('firstTuesday -> ' + firstTuesday.format('MMM dd DD YYYY'));

var secondTuesday = moment().endOf('month').endOf('month').subtract(3, 'w');
// console.log('secondTuesday? -> ' + secondTuesday.format('MMM dd DD YYYY'));

var thirdTuesday = moment().endOf('month').endOf('month').subtract(2, 'w');
// console.log('thirdTuesday? -> ' + thirdTuesday.format('MMM dd DD YYYY'));

var fourthTuesday = moment().endOf('month').endOf('month').subtract(1, 'w');
// console.log('fourthTuesday? -> ' + fourthTuesday.format('MMM dd DD YYYY'));

function clearTable() {
    if (moment().isAfter(fourthTuesday)) {
        console.log('after fourth ' + fourtTuesday.format('MMM dd DD YYYY'));
        $('#first-body').show();
        $('#second-body').show();
        $('#third-body').show();
    }
    else if
        (moment().isAfter(thirdTuesday)) {
        console.log('after third ' + thirdTuesday.format('MMM dd DD YYYY'));
        $('#first-body').hide();
        $('#second-body').hide();
        $('#third-body').hide();
    }
    else if (moment().isAfter(secondTuesday)) {
        console.log('after second ' + secondTuesday.format('MMM dd DD YYYY'));
        $('#first-body').hide();
        $('#second-body').hide();
    } else if
    (moment().isAfter(firstTuesday)) {
        console.log('after first ' + firstTuesday.format('MMM dd DD YYYY'));
        $('#first-body').hide();
    };
};

clearTable();
