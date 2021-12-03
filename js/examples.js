"use strict";

// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values to be true

// let isAtBar = false;
// let bac = .00;
// let age = 22;
// let cashOnHand = 4.99;
//
//
// let canHaveADrink = (isAtBar = true || false && bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false
//
// if (canHaveADrink) { // true or false
//     console.log("Have a brewski my dude!");
// } else { // it was not true
//     console.log("Sorry buddy, no brew for u");
//}

//if it was sunny I'd wear shorts
//if it was raining I'd wear a rain jacket
//if it was snowing I'd wear a heavy jacket

// let weather = "snowy";
//
// if (weather === "sunny") {
//     console.log("wear shirt");
// } else if (weather === "rainy") {
//     console.log("bring umbrella");
// } else if (weather === "snowy") {
//     console.log("wear heavy jacket");
// } else {
//     console.log("wear whatever")
//
// }

//
//
// let myAge = 33;
// let actualAge = 21;
//
// function checkAge(givenAge, realAge) {
//     if (givenAge === realAge) {
//         console.log("My age is my actual age");
//     } else {
//         console.log("My age is not my actual age");
//     }
// }
//
// checkAge(myAge, actualAge);
//
/*let joesGrade = 50;
let bobsGrade = 66;
let fredsGrade = 72;
let mikesGrade = 88;
let bobosGrade = 99;

function gradeCheck(numberGrade) {
    if (numberGrade >= 90) {
        console.log("A");
    } else if (numberGrade >= 80) {
        console.log("B");
    } else if (numberGrade >= 70) {
        console.log("C");
    } else if (numberGrade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }

}

gradeCheck(joesGrade);*/

//ternary //

// 4 == "4" ? console.log("matches") : console.log("not matches");

// let joesGrade = 50;
// let bobsGrade = 66;
// let fredsGrade = 72;
// let mikesGrade = 88;
// let bobosGrade = 99;
//
// joesGrade >= 60 ? console.log("You passed") : console.log("You failed");
// bobsGrade >= 60 && bobsGrade <= 69 ? console.log("You got a D") : console.log("You got an F");

// switch statments //

// let weather = "rainy";
//
// switch (weather) {
//     case "sunny":
//         console.log("sunglasses");
//         break;
//     case "rainy":
//         console.log("umbrella");
//         break;
//     case "snowy":
//         console.log("10 jackets");
//
// }


let joesGrade = 50;
let bobsGrade = 66;
let fredsGrade = 72;
let mikesGrade = 88;
let bobosGrade = 99;

switch (true) {
    case bobosGrade >= 90:
        console.log("You got an A");
        break;
    case bobosGrade >= 80:
        console.log("You got a B");
        break;

}