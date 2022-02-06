'use strict';

///// JS Review  /////

////declaring an object

// let USA = {
//     Texas: {
//         size: "big",
//         flower: "bluebonnet",
//         bird: "mockingbird",
//         people: 30,
//         addPeople: function (){
//             this.people
//         }
//     }
// }
//
//
// let sirius = {
//     //properties
//     numStudents: 29,
//     city: "San Antonio",
//     inPerson: false,
//     theBest: true,
//
//     ////// methods - storage for functions
//     returnCity: function (){
//         return this.city
//     }
//
// }
// console.log(sirius.inPerson);  // dot notation
// console.log(sirius.returnCity());
//
// let cities = [
//     {city: "san antonio", people: 30, isGreat:true, team: "spurs"},
//     {city: "dallas", people: 40, isGreat:false, team: "mavs"},
//     {city: "houston", people: 50, isGreat:true, team: "rockets"},
//     {city: "austin", people: 20, isGreat:false, team: "none"},
// ]

//forEach
// cities.forEach(function (x){
//     console.log(x.city)
// })
//
// let sports = ["spurs", "mavericks", "rockets", "bucks"];

// sports.forEach(function (x){
//     console.log("current team: " +x)
// })
//
// /////for loop
//
// for(let i = 0; i <= sports.length -1; i++){
//    console.log("current team: " + sports[i])
// }

/// does team name start with r?
//
// sports.forEach(function (team){
//     let firstLetter = team.charAt(0)
//     // console.log(firstLetter)
//     if(firstLetter === "r"){
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// })

///// Warmup exercise 20Jan2022
//
// write a function that accepts a string and checks whether each string is upperCase or lowerCase and returns "letter  [insert letter] is uppercase/lowercase", accordingly.  Bonus: return "is not a character" if it's not a letter
//
// input example: "bJIENsdfRAIRVIrsRFAijgRar"
// let string = "bJI*ENsd4fRAIR5VIrsRFA-ijgRar";
// let splitStr = string.split("");
// console.log(splitStr)
// splitStr.forEach(function (str) {
//     if (str.toUpperCase() === str.toLowerCase()) {
//         console.log(str + " is not a letter.")
//     } else if (str === str.toUpperCase()) {
//         console.log(str + " is uppercase.")
//     } else if (str === str.toLowerCase()) {
//         console.log(str + " is lowercase.")
//     }
// })

// Monday Morning Warmup
// PROBLEM:  write a function that accepts a string of numbers and returns the sum of those numbers
// INPUT 1: "42958372" --- EXPECTED OUTPUT 1: 40
// INPUT 2: "917485"      --- EXPECTED OUTPUT 2: 34
// let str = "917485"
// let strArr = str.split("")
// console.log(strArr);
//
//
// let sum = strArr.reduce(function(total, num){
//     return parseFloat(total) + parseFloat(num);
// });
// console.log(sum);

// Tuesday Morning Warmup
// Find any duplicates in a string of numbers, return an object that shows which letters where duplicated how many times
// INPUT: “42992338111134”
// EXPECTED OUTPUT: {9: 2, 3: 2, 1: 4}

// let input = "42992338111134"
// input = input.split("")
// console.log(input);
// let count = {}
// input.forEach (function(i){
//     count [i] = (count[i] || 0) + 1})
//
// console.log(count)
