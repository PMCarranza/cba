'use strict';



function getDates() {
    var firstDate = moment().subtract(6, 'days').startOf('day').toString();
// console.log('date', firstDate);

var start = moment('2020-04-14');
// console.log('start ' + start);

// var end = moment(start).day(2 + 14).format('dddd MMM Do');
// console.log('end date is ' + end);

// var frequency = moment(start).day(2 + 14).format('dddd MMM Do');
// console.log('frequency ' + frequency);

var nextMeet = $('<h2>Join us on </h2>');
// nextMeet.append(frequency);

// $('#serving').append(nextMeet);

    for (var i = 0; i < 1; i++) {
        var repeat = moment(start).day(2 + 14);
        // console.log('start ' + start);
        start = repeat;
        // console.log('i ' + i);
        // console.log('repeat ' + repeat);
        // console.log('start ' + start);
        var formatted = moment(repeat).format('dddd MMM Do');
        // console.log('formatted ' + formatted);
        nextMeet.append(formatted);
        $('#serving').append(nextMeet);
    }
};

getDates();