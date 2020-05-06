'use strict';

// hide input form until yes is chosen
$('.form').hide();
// clearTable();

// fillable form to be shown only if something will be brought
$('#yes').on('click', function () {
    event.preventDefault();
    // show input form only if volunteer is bringing something 
    var bring = $('#yes').val().trim();
    // console.log('bring - > ' + bring);
    if (bring) {
        $('.form').show();
    }
})

// fillable form to be hidden if no is picked
// this is just in case someone changes their mind and clicks no after clicking yes
$('#no').on('click', function () {
    event.preventDefault();
    var bring = $('#no').val().trim();
    if (bring) {
        $('.form').hide();
    }
});

// variable gets the day of the week to use in the switch statement
var day = (moment().day());
console.log('day -> ' + day);

// switch statement, tables get cleared according to the tuesday in the month
switch (day) {
    case 3:
        // day > 3;
        console.log('first day -> ' + day);
        $('#first-body').hide();
        break;
    case 10:
        // day > 10;
        console.log('second day -> ' + day);
        $('#second-body').hide();
        break;
    case 17:
        // day > 16;
        console.log('third day -> ' + day);
        $('#third-body').hide();
        break;
    case 24:
        // day > 24;
        console.log('fourth day -> ' + day);
        $('#fourth-body').hide();
};

// clears table in order of tuesdays  USE IT IN CASE SWITCH DOES NOT WORK
// console.log(moment().format('dddd'));
// function clearTable() {
//     if (moment().weekday() === 2) {
//         $('#first-body').hide();
//     };
// };