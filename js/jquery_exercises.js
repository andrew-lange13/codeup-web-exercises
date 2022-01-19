'use strict';

$(document).ready(function (){
    alert("The DOM has finished loading!");
});



// let val = $("#p-one").text();
//
// console.log(val)


/// add a class of border to my p tag

$("#p-one").addClass("border");

// add heading to border is user is logged in
// check value of isLoggedIn
// compare value of logged in to true
//add border
///assign a class if true
///find element
///add class
let user1 = {
    name: "bob",
    isLoggedIn: true,
    age: 92,
}

let loginStatus = user1.isLoggedIn;

if(loginStatus === true){
    $("#heading").addClass("border");
}

$("#heading").click(function () {
    alert($("#heading").text())
})
