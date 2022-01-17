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

function mean(x){
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let y = (x.reduce(reducer));
    return y/x.length
}


// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//     Examples
//
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word){

}
