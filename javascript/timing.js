'use strict';

var servingDay = moment().day(2);
    console.log('servingDay ' + servingDay);

// dom element to append the next serving date
var nextMeet = $('<h2>Join us on </h2>');

// declaring variable to hold the next serving date
var repeat;

var today = moment().day();
console.log('today ' + today);

// function gets the date of tuesday to serve
function getDates() {

    // creating dom element to append the next serving date
    $('#serving').append(nextMeet);
    // if it is tuesday add a week to serving date and append to dom
    if (moment(today).isAfter(2)) {
        // add one week
        repeat = servingDay.add(1, 'week');
        // variable gets the formatted date
        var formatted = moment(repeat).format('dddd MMM Do');
        console.log('formatted -> ' + formatted);
        // appends the formatted date to the header element
        nextMeet.append(formatted);
        // appends header to its containing div
        $('#serving').append(nextMeet);
    } else {
        // variable gets the formatted date
        var formatted = moment(servingDay).format('dddd MMM Do');
        // console.log('formatted -> ' + formatted);
        // appends the formatted date to the header element
        nextMeet.append(formatted);
        // console.log('formatted ' + formatted);
        // appends header to its containing div
        $('#serving').append(nextMeet);
    };
};
// calls function
getDates();