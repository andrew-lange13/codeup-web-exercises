"use strict"
//////////// while
//
// let i = 0;
//
// while(i <= 20){
//     i++;
//     console.log("There are " + i + " parking spots available")
// }

///// while

// let i = 0;
//
// while(i <= 15){
//     console.log(i);
//     i++;
//     console.log(i);
// }

/////// do while

// let i = 0;
//
// do {
//     i++;
//     console.log(i);
// } while (i < 15){
//
// }

// let i = 0;
//
// do {
//     i += 2;
//     console.log(i);
// } while (i < 50);

/////// practice


//
// let i = 0;
//
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
//
// console.log("------------------");
//
// let x = 0
//
// do {
//     console.log(x);
//     x++;
// } while (x <=10);

///////////password prompt while loop

// using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

// let password = "bob";
// let input = prompt("Enter Password");
//
// while (input !== password) {
//     alert("Incorrect Password, Try Again");
//     input = prompt("Enter Password");
// }
// alert("Good Job");
//

/////// for loops

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }


// for(let i = 0; i <= 15; i += 3){
//     console.log(i);
// }

// let dozens = 0;
// for (let eggs = 0; eggs <= 48; eggs++){
//     dozens = eggs/12;
//     console.log("dozens: ", dozens);
//     console.log("eggs: ", eggs);
// }

///////nested loops

// for (let counter = 1; counter <= 5; counter++){
//     console.log("first counter: " + counter);
//     for (let counterTwo = 5; counterTwo > 0; counterTwo--){
//         console.log("secondCounter: " + counterTwo);
//     }
// }


// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that contains only those whose name have only 4 letters in them.

let namesArr = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];

let answer = namesArr.filter(name => name.length === 4);

console.log(answer);
