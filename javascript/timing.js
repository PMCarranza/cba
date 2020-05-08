'use strict';

var servingDay = moment().day(2);
// console.log('servingDay ' + servingDay.toString());
// dom element to append the next serving date
var nextMeet = $('<h2>Join us on </h2>');

// declaring variable to hold the next serving date
var repeat;

function getDates() {

    // creating dom element to append the next serving date
    $('#serving').append(nextMeet);

    // if it is tuesday add a week to serving date
    if (servingDay === 2 || 9 || 16 || 23) {
        repeat = servingDay.add(1, 'week');
        // console.log('repeat ' + repeat.toString());
    };

    // repeat = servingDay.add(1, 'week');
    // console.log('repeat ' + repeat.toString());

    // variable gets the formatted date
    var formatted = moment(repeat).format('dddd MMM Do');

    // appends the formatted date to the header element
    nextMeet.append(formatted);
    // console.log('formatted ' + formatted);

    // appends header to its containing div
    $('#serving').append(nextMeet);
};

// calls function
getDates();
