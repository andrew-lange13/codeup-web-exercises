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

// 2/8/2022 Warmup

// Write a function that removes any duplicates from an array.
//     Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]

// let inputDupes = new Set([2,3,5,8,3,1,2,6,3,2,7,8,2,4,7])

// let inputDupes = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
//
// let removeDupes = inputDupes.reduce((previousValue, currentValue) => {
//     if(previousValue.indexOf(currentValue) === -1){
//         previousValue.push(currentValue)
//     }
//     return previousValue
// },[])
//
// console.log(removeDupes);


// 2/9/2022 Warmup

// write a function that takes a string as argument and returns the number of vowels contained in that string.
//     The vowels are “a”, “e”, “i”, “o”, “u”.
// input: "helicopter"
// output: 4
// reason: there are 4 vowels in the input word helicopter


// function vowels(string) {
//     let vowelCount = 0;
//     const vowels = ["a", "e", "i", "o", "u"];
//     for (let char of string){
//         if(vowels.includes(char)){
//             vowelCount++
//         }
//     } return vowelCount
// }
//
// console.log(vowels("helicopter"))


// write a function that counts the number of duplicate characters.
//     example input: "adsjfdsfsfjsdjfhacabcsbajda"
// expected output: { a: 5, b: 2, c: 2, d: 4, f: 4, j: 4, s: 5 }

function countDupes(str) {
    if (str) {
        let counter = {}
        for (let i = 0; i < str.length; i++) {
            if(counter[str[i]]){
                counter[str[i]] += 1;
            } else {
                counter[str[i]] = 1;
            }
        }console.log(counter)
    }
}

countDupes("adsjfdsfsfjsdjfhacabcsbajda")
