'use strict';;

// hide input form until yes is chosen
$('.form').hide();
$('#guidelines').hide();

// fillable form to be shown only if something will be brought
$('#dropdownMenuButton').on('click', function () {
    // event.preventDefault();
    // show input form only if volunteer is bringing something 
    // var bring = $('#yes').val().trim();
    // console.log('bring - > ' + bring);
        $('.form').show();
})

$('#read-guidelines').on('click', function () {
    $('#guidelines').show();
})

$('#hide-guidelines').on('click', function () {
    $('#guidelines').hide();
    // $('#form').trigger('reset');
});