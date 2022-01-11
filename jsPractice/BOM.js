'use strict';

//BOM Intro

// let sirius = {
//     numStudents: 30,
//     classroom: "remote",
//
// // Methods - functions stored inside an object
//     takeAttendance: function () {
//         prompt("how many students?");
//         return this.numStudents;
//     }
// }
//
// sirius.takeAttendance();
//
//
// let BOM = {
//     window: {
//         currentPage: "www.google.com",
//         prevPage: "www.facebook.com"
//     },
//     prompt: function (){
//         return "prompt window";
//     },
//     setInterval: function () {
//         //sets the interval
//     }
// }

// let favoriteNumber = 13; // global scoped
//
// function add(num1){
//     let num2 = 10; // local scoped
//     return num1 + num2;
// }
//
// console.log(add(favoriteNumber));

// --BOM Methods-- //
// SET INTERVAL (after a set amount of time)

// Be aware of infinite loops

// var count = 0; //starting point
// var max = 10; // max number we want to get to
// var interval = 1000; // interval time in milliseconds
//
// var intervalId =
//     setInterval(function () {
//     if (count >= max) {
//         clearInterval(intervalId);
//         console.log('All done');
//     } else {
//         count++;
//         console.log('Repeating this line ' + count);
//     }
// }, interval);

// SET TIMEOUT


var delay = 5000; // delay time in milliseconds

var timeoutId = setTimeout(function () {
    alert('Here is a delayed hello!');
}, delay);

// to cancel the timeout, you can call
// clearTimeout(timeoutId);
// prior to the delay expiring

