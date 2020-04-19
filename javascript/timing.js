'use strict';

var frequency = moment().day(2+14).format('dddd MMM Do');

console.log('frequency ' + frequency);

var nextMeet = $('<h2>Next serving day is </h2>');
nextMeet.append(frequency);

$('#serving').append(nextMeet);
