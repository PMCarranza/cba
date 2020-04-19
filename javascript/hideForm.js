'use strict';

$('.form').hide();

// fillable form to be shown only if something will be  brought
$('#one').on('click', function (getting) {
    var bring = $('#one').val().trim();
    if (bring) {
        $('.form').show();
    }
})

// fillable form to be hidden if no is picked
$('#two').on('click', function (getting) {
    var bring = $('#two').val().trim();
    if (bring) {
        $('.form').hide();
    }
});