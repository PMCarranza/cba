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
var database = firebase.database();

// capturing info at subimt
$('#submit').on('click', function (collect) {
    // getdata();
    // if needed
    collect.preventDefault();

    var name = $('#name').val().trim();

    var bringing = $('#text-area').val().trim();

    // var isComing = $('<td>').text(name);
    // var isBringing = $('<td>').text(bringing);

    // $('#cuerpo').append(isComing, isBringing);


    // code for handling the push to the database
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // in this case the method push is used to add the child to the firebase data as opposed to replacing 

    // Create a new post reference with an auto-generated id

    database.ref().push({
        name: name,
        bringing: bringing,
    });

    // clear form
    // the trigger() method is being used to clear the div selected (the fillable form in this case); user inputs the information and on click trigger() clears the form and is ready for the next input  
    $('#form').trigger('reset');

});

// Firebase watcher .on('child-added)
// A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
// The child_added event is typically used when retrieving a list of items from the database. Unlike value which returns the entire contents of the location, child_added is triggered once for each existing child and then again every time a new child is added to the specified path (firebase-real time database - docs - guides)
// on child added, the function snapshot will be be run

database.ref().on('child_added', function (snapshot) {

        // create a new variable for snapshot for convenience
        // A snapshot is a picture of the data at a particular database reference at a single point in time
        var sv = snapshot.val();

        var newTr = $('<tr>');

        var dbName = $('<td>').text(sv.name);
        var dbBringing = $('<td>').text(sv.bringing);

        newTr.append(dbName, dbBringing);

        $('#cuerpo').append(newTr);


    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});