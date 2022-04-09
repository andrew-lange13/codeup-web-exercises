'use strict';

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//     Example
//
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]


function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter(x => typeof x === "number")
}


// Write a function definition named mean that takes in sequence of numbers and returns the average value

function mean(x) {
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let y = (x.reduce(reducer));
    return y / x.length
}


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//     Examples
//
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
}

// }Write a function that takes an integer minutes and converts it to seconds.
//
function convert(minutes) {
    return minutes * 60
}

// Create a function that returns true if the first array can be nested inside the second.
//
//     arr1 can be nested inside arr2 if:
//
// arr1's min is greater than arr2's min.
//     arr1's max is less than arr2's max.


function canNest(arr1, arr2) {
    return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
}

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
    if (step === 0) {
        return 0
    } else if (step === 1) {
        return 6
    } else {
        return 1 + (step * 5)
    }
}

// TODO: Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

function filterLongWords(sentence, n) {
    let sentArray = sentence.split(" ");
    let newArray = [];
    for (let i = 0; i < sentArray.length; i++) {
        if (sentArray[i].length > n) {
            newArray.push(sentArray[i])
        }
    }
    return newArray;
}

// TODO: Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return names[0] + " likes this";
    } else if (names.length === 2) {
        return names[0] + " and " + names[1] + " like this";
    } else if (names.length === 3) {
        return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    } else {
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this"
    }
}

// TODO: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

function solution(number) {
    let sum = 0;
    let numArray = [];
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            numArray.push(i)
        }
    }
    for (let i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    }
    return sum;
}


// TODO: Return the number (count) of vowels in the given string.

function getCount(str) {
    let vowelsCount = 0;
    const stringArray = Array.from(str)
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === 'a' || stringArray[i] === 'e' || stringArray[i] === 'i' || stringArray[i] === 'o' || stringArray[i] === 'u') {
            vowelsCount += 1
        }
    }
    return vowelsCount;
}

// TODO: Given a principal p, interest rate r, and a number of periods n, return an array [total owed under simple interest, total owed under compound interest].

function interest(P, r, n) {
    const totalArray = [];
    let simple = (P * r * n) + P;
    totalArray.push(parseInt(Math.round(simple)));
    let compound = P * (Math.pow((1 + r), n));
    totalArray.push(parseInt(Math.round(compound)))
    return totalArray
}

// TODO: Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

function warnTheSheep(queue) {
    if (queue[queue.length - 1] === "wolf") {
        return "Pls go away and stop eating my sheep"
    } else {
        return "Oi! Sheep number " + (queue.length - (queue.indexOf("wolf") + 1)) + "! You are about to be eaten by a wolf!"
    }
}

// TODO: You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    for (let i = 0; i < classPoints.length; i++) {
        sum += classPoints[i];
    }
    let average = sum / (classPoints.length);
    return yourPoints > average;
}
