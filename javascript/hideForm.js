'use strict';

// hide input form until yes is chosen
$('.form').hide();
clearTable();

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
// console.log('day -> ' + day);

// clears table in order of tuesdays  USE IT IN CASE SWITCH DOES NOT WORK
// console.log(moment().weekday());
function clearTable() {
    if (moment().weekday() >= 3) {
        $('#first-body').hide();
    } else if
        (moment().weekday() >= 10) {
            $('#second-body').hide();
        
    }    else if (moment().weekday() >= 17) {
        $('#third-body').hide();
    } else if
        (moment().weekday() >= 24) {
            $('#fourth-body').hide();
    };
};