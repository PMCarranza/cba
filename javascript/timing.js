'use strict';

// setting start date
var start = moment('2020-04-28');

// dom element to append the next serving date
var nextMeet = $('<h2>Join us on </h2>');

// declaring variable to hold the next serving date
var repeat;

function getDates() {
    // creating dom element to append the next serving date
    $('#serving').append(nextMeet);

    // if it is tuesday add a week to serving date
    if (moment().weekday() === 2) {
        repeat = start.add(1, 'week');
    };

    repeat = start.add(1, 'week');

    // variable gets the formatted date
    var formatted = moment(repeat).format('dddd MMM Do');

    // appends the formatted date to the header element
    nextMeet.append(formatted);

    // appends header to its containing div
    $('#serving').append(nextMeet);

};

// calls function
getDates();
