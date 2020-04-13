'use strict';

// configuring firebase
var firebaseConfig = {
    apiKey: "AIzaSyDhNmbTZWrHTqKgtArs2VVbQtXr3u-uMSo",
    authDomain: "bcc-cba.firebaseapp.com",
    databaseURL: "https://bcc-cba.firebaseio.com",
    projectId: "bcc-cba",
    storageBucket: "bcc-cba.appspot.com",
    messagingSenderId: "161391316380",
    appId: "1:161391316380:web:39048cd5a8a8a0a7398c59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// variable to reference db
// var database = firebase.database();

$('.form').hide();

// fillable form to be shown only if something will be  brought
$('#one').on('click', function (getting) {
    var bring = $('#one').val().trim();
    console.log(bring);
    if (bring) {
        $('.form').show();
    }
})

// capturing info at subimt
$('#submit').on('click', function (collect) {
    // if needed
    collect.preventDefault();

    var name = $('#name').val().trim();
    console.log(name);

    var bringing = $('#text-area').val();
    console.log(bringing);
});