'use strict';

console.log('hide present');

$('.form').hide();

// fillable form to be shown only if something will be  brought
$('#one').on('click', function () {
    var bring = $('#one').val().trim();
    console.log('bring - > ' + bring);
    if (bring) {
        $('.form').show();
    }
})

// fillable form to be hidden if no is picked
$('#two').on('click', function () {
    var bring = $('#two').val().trim();
    if (bring) {
        $('.form').hide();
    }
});