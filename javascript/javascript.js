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

// getting last day of the month to delete db
// const lastDay = moment().endOf('month').format('MMM Do');
// console.log(lastDay);

var firstTuesday = moment().startOf('month').startOf('week').add(2, 'd');
// console.log('firstTuesday -> ' + firstTuesday.format('MMM dd DD YYYY'));

// function to find the first tuesday
findLastTuesday();

// variable to capture value from tuesday choice
var whichTuesday;

$('#first').on('click', function () {
    event.preventDefault();
    whichTuesday = $('#first').val().trim();
});
$('#second').on('click', function () {
    event.preventDefault();
    whichTuesday = $('#second').val().trim();
});
$('#third').on('click', function () {
    event.preventDefault();
    whichTuesday = $('#third').val().trim();
});

$('#fourth').on('click', function () {
    event.preventDefault();
    whichTuesday = $('#fourth').val().trim();
});

// capturing info at submit
$('#submit').on('click', function (collect) {
    // if needed
    collect.preventDefault();

    var name = $('#name').val().trim();
    if (!name) {
        alert('Please add your name before submitting');
        return;
    };

    var bringing = $('#text-area').val().trim();

    // code to be used w/o call to firebase (for testing)
    // var isComing = $('<td>').text(name);
    // var isBringing = $('<td>').text(bringing);
    // var newTr = $('<tr>');
    // newTr.append(isComing, isBringing);
    // $('#' + whichTuesday + '-body').append(newTr);

    // code for handling the push to the database
    // A Reference represents a specific location in your Database and can be used for reading or writing data to that Database location (firebase - docs - reference)
    // in this case the method push is used to add the child to the firebase data as opposed to replacing 

    // Create a new post reference with an auto-generated id
    database.ref().push({
        name: name,
        bringing: bringing,
        day: whichTuesday
    });

    // the trigger() method is being used to clear the div selected (the fillable form in this case); user inputs the information and on click trigger() clears the form and is ready for the next input  
    $('#form').trigger('reset');
    $('.form').hide();
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
    var dbDay = sv.day;

    newTr.append(dbName, dbBringing);

    $('#' + dbDay + '-body').append(newTr);

    // Handle the errors
}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

/*function finds the first tuesday of the month,
adds variable with a duration of 4 weeks
adds variable which gets the value of the first tuesday + four weeks
if the variable with the 4 week duration and the variable with the 4 weeks added match
delete the databae
*/
function findLastTuesday(startDate) {
    // calculates the last tuesday of the month and passes it to the variable
    var dayToDelete = moment().endOf('month').startOf('week').subtract(4, 'd');
    console.log('day to delete db ' + dayToDelete.format('MMM dd DD YYYY'));

    if (moment().isSame(dayToDelete)) {
        console.log('clears db and resets first tuesday');
        clearDb();
    } else {
        console.log('DB was not cleared the date is -> ' + moment().format('MMM dd DD YYYY'));
    }
}
// clears db on the 4th tuesday
function clearDb() {
    console.log('database has been cleared! ');
    firebase.database().ref().remove();
};