'use strict';

console.log('hideform');

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

// clears table in order of tuesdays
// console.log(moment().format('dddd'));
function clearTable() {
    if (moment().weekday() === 2) {
        $('#first-body').hide();
    };
};