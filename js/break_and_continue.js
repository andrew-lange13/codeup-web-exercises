'use strict'
/////

// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// let input = prompt("Enter odd number between 1 and 50");
//
// for(let oddNum = 1; oddNum <= 50; oddNum += 2){
//     console.log(oddNum);
//     if (parseInt(input) % 2 === 0){
//         alert("That's not odd!");
//         input = prompt("Enter odd number between 1 and 50");
//     } else {
//         break;
//     }
// }

// let input = 0;
//
// do {
//     input = Number(prompt("Enter an odd number between 1 and 50"));
//     if(input < 1 || input > 50){
//         alert("Number doesn't meet requirements");
//     } else if(input % 2 === 0){
//         alert("Number isn't odd");
//     } else if(isNaN(input)){
//         alert("Not a number");
//     }else{
//         alert("Good Job");
//         break;
//     }
//
//
// } while(true)


// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


// let input = prompt("Enter odd number between 1 and 50");
//
// for (let i = 1; i < 50; i += 2){
//     if (parseInt(input) === i){
//         console.log("We skipped your number!");
//         continue;
//     }
//     console.log(i)
// }

// let input = Number(prompt("Enter number between 1 and 50"));
//
// console.log("Number to skip is " + input);
//
// for (let i = 1; i <= 50; i += 2) {
//     if (i === input){
//         console.log("skipping number " + input)
//         continue;
//     }
//     console.log("here is an odd number " + i);
// }
