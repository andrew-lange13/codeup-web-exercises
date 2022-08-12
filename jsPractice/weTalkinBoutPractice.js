// Functions using conditionals but not loops or arrays:
//
//     - Make a function named `isOdd(number)`

function isOdd(num) {
    return Math.abs(num) % 2 === 1;
}

console.log(isOdd(3));

// - Make a function named `isEven(number)`

function isEven(num) {
    return Math.abs(num) % 2 === 0;
}

console.log(isEven(-4));
// - Make a function named `identity(input)` that returns the input exactly as
// provided.

function identity(input) {
    return input;
}

console.log(identity("I like turtles!"))

// - Make a function named `isFive(input)`

// function isFive(input) {
//     return input === 5;
// }
//
// console.log(isFive(5));


// - Make a function named `addFive(input)` that adds five to some input.

function addFive(input) {
    return input + 5;
}

console.log(addFive(-2));


// - Make a function named `isMultipleOfFive(input)`

function isMultipleOfFive(input) {
    return input % 5 === 0;
}

console.log(isMultipleOfFive(195));

// - Make a function named `isThree(input)`

function isThree(input) {
    return input === 3;
}

console.log(isThree(3));

// - Make a function named `isMultipleOfThree(input)`

function isMultipleOfThree(input) {
    return input % 3 === 0;
}

console.log(isMultipleOfThree(-3));

// - Make a function named `isMultipleOfThreeAndFive(input)`

function isMultipleOfThreeAndFive(input) {
    return input % 3 === 0 && input % 5 === 0;
}

console.log(isMultipleOfThreeAndFive(15));

// - Make a function named `isMultipleOf(target, n)` which checks if target is
// evenly divisible by `n`

function isMultipleOf(target, n) {
    return target % n === 0;
}

console.log(isMultipleOf(6, 3));

// - Make a function named `isTrue(boolean)`

function isTrue(boolean) {
    return boolean ? "true" : "false";
}

console.log(isTrue(1));

// - Make a function named `isFalse(boolean)`

function isFalse(boolean) {
    return boolean ? "true" : "false";
}

console.log(isFalse(0));

// - Make a function named `isTruthy(input)`, remember that values other than true
// will behave like true

function isTruthy(input) {
    return input ? "truthy" : "falsy";
}

console.log(isTruthy({}))

// - Make a function named `isFalsy(input)`, remember that values other than false
// behave like false

function isFalsy(input) {
    return input ? "truthy" : "falsy";
}

console.log(isFalsy(NaN))

// - Make a function named `isVowel(letter)`

function isVowel(letter) {
    return ('aeiou').indexOf(letter.toLowerCase()) !== -1
}

console.log(isVowel('E'))

// - Make a function named `isConsonant(letter)`

function isConsonant(letter) {
    return ('aeiou').indexOf(letter.toLowerCase()) === -1
}

console.log(isConsonant('b'));

// - Make a function named `isCapital(letter)`

function isCapital(letter) {
    return letter === letter.toUpperCase();
}

console.log(isCapital("L"))

// - Make a function named `isLowerCase(letter)`

function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}

console.log(isLowerCase("l"))

// - Make a function named `hasLowerCase(string)` that returns if a string has any
// lower cased letter

function hasLowerCase(string) {
    return string !== string.toUpperCase();
}

console.log(hasLowerCase("I LIKE TURTLEs!"));

// - Make a function named `isSpace(letter)` that returns if a character is a space
// character

function isSpace(letter) {
    return letter.includes(" ");
}

console.log(isSpace(" "));

// - Make a function named `isZero(number)`

function isZero(number) {
    return number === 0;
}

console.log(isZero(0));

// - Make a function named `notZero(input)` that returns true if the input is not
// zero

function notZero(number) {
    return number !== 0;
}

console.log(notZero(1));

// - Write a function named `lowerCase(string)`

function lowerCase(string) {
    return string === string.toLowerCase();
}

console.log(lowerCase("i like turtles!"));

// - Write a function named `double(n)` that returns a number times two

function double(n) {
    return n * 2;
}

console.log(double(2));

// - Write a function named `triple(n)` that returns a number times 3

function triple(n) {
    return n * 3;
}

console.log(triple(5));

// - Write a function named `quadruple(n)` that returns a number times 4

function quadruple(n) {
    return n * 4;
}

console.log(quadruple(1.5));

// - Write a function named `half(n)` that returns 1/2 of the provided input

function half(n) {
    return n / 2;
}

console.log(half(12));

// - Write a function named `subtract(a, b)` that returns `a` minus `b`

function subtract(a, b) {
    return a - b;
}

console.log(subtract(12, 6));

// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3));

// - Write a function named divide(a, b) that returns `a` divided by ~b~

function divide(a, b) {
    return a / b;
}

console.log(divide(12, 2));

//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b

function remainder(a, b) {
    return a % b;
}

console.log(remainder(48, 7));

// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b

function modulo(a, b) {
    return a % b;
}

console.log(modulo(55, 7));

// - Write a function named `cube(n)` that returns n * n * n

function cube(n) {
    return Math.pow(n, 3);
}

console.log(cube(3));

// - Write a function named `squareRoot(n)` that returns the square root of the
// input

function squareRoot(n) {
    return Math.sqrt(n);
}

console.log(squareRoot(36));

// - Write a function named `cubeRoot(n)` that returns the cube root of the input

function cubeRoot(n) {
    return Math.cbrt(n);
}

console.log(cubeRoot(125));

// - Write a function named `invertSign(number)` that returns a negative version of
// a postive number, a positve version of negative, and false for all else.

// NEEDS HELP //
function invertSign(number) {
    return -Math.abs(number);
}

console.log(invertSign(6));

// - Write a function named `degreesToRadians(number)`

function degreesToRadians(number) {
    return number * (Math.PI / 180);
}

console.log(degreesToRadians(1));

// - Write a function named `radiansToDegrees(number)`

function radiansToDegrees(number) {
    return number * (180 / Math.PI);
}

console.log(radiansToDegrees(1));

// - Make a function named `isBlank(input)` that determines if a given input is
// spaces, newline characters, or tabs.

// NEEDS HELP  ///
function isBlank(input) {
    return input === " ";
}

console.log(isBlank(" "))

// - Make a function named `trim(string)` that removes empty spaces before and
// after the input.

function trim(string) {
    return string.trim();
}

console.log(trim("  I like turtles!!   "));

// - Make a function named `areEqual(input1, input2)` that returns if both inputs
// have the same value

function areEqual(input1, input2) {
    return input1 == input2;
}

console.log(areEqual(6, "6"));

// - Make a function named `areIdentical(input1, input2)` that returns if both
//     inputs are same value and data type.

function areIdentical(input1, input2) {
    return input1 === input2;
}

console.log(areIdentical(6, "6"));

// - Make a function named `not(input)` returns the input with a flipped boolean

function not(input) {
    return input = !input;
}

console.log(not(false));

// - Make a function named `notNot(input)` that the negation of the negation of the
// input.

function notNot(input) {
    return input = !!input;
}

console.log(notNot(false));

// - Make a function named `and(predicate1, predicate2)` that returns the logical
// operation of AND

function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}

console.log(and("likes turtles", "hates turtles"))

// - Make a function named `or(predicate1, predicate2)` that returns the logical
// operation of OR

function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}

console.log(or("hates turtles", "likes turtles"));

// - Write a function called `reverseString(string)` that reverses a string

function reverseString(string) {
    return string.split(" ").reverse().join(" ");
}

console.log(reverseString("i like turtles"));

// - Make a function named `absoluteValue(number)` that returns the absolute value
// of a number.

function absoluteValue(number) {
    return Math.abs(number);
}

console.log(absoluteValue(-873));

// - Make a function named `rollDice(sides)` that takes in an argument containing
// the number of sides the die should have. Generate a random number between 1 up
// to and including the number of sides.

function rollDice(sides) {
    return Math.floor(Math.random() * sides);
}

console.log(rollDice(6));

//
//
//
//     ## Simple Function Drills
//
// 1. Make a function called returnTwo() that returns the number 2 when called
//
// Test this function with `console.log(returnTwo())`

function returnTwo() {
    return 2;
}

console.log((returnTwo()));

//
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
//
//    Test this function by directly calling `sayHowdy()`
//
// Remember this function does not need a defined return value

function sayHowdy() {
    console.log("Howdy!");
}

sayHowdy();

//
// 1. Make a function called returnName() that returns the string of your name
//
// Test this function with `console.log(returnName())`
//

function returnName() {
    return "Andrew";
}

console.log(returnName());

//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
//
// Test this function with `console.log(addThree(5))`

function addThree(number) {
    return number + 3;
}

console.log(addThree(5));

//
//     1. Make a function called sayString() which returns the string input passed in.
//
// Test this function with `console.log(sayString('codeup'))`
//

function sayString(string) {
    return string;
}

console.log(sayString('codeup'));

//
//     ## Challenge Function Drills
//
// - Write a function called `identity(input)` that takes in an argument called
// input and returns that input.

function identity(input) {
    return input;
}

console.log(identity(7));

//
// - Write a function called `getRandomNumber(min, max)` that returns a random
// number between min and max values sent to that function call.
//

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min));
}

console.log(getRandomNumber(0, 10));

// - Write a function called `first(input)` that returns the first character in the
// provided string.
//

function first(input) {
    return input.charAt(0);
}

console.log(first("I like turtles"));

// - Write a function called `last(input)` that returns the last character of a
// string
//

function last(input) {
    return input.charAt(input.length - 1);
}

console.log(last("I like turtles"));

// - Write a function called `rest(input)` that returns everything but the first
// character of a string.
//

function rest(input) {
    return input.substring(1);
}

console.log(rest("Turtles"));

// - Write a function called `reverse(input)` that takes a string and returns it
// reversed.

function reverse(input) {
    return input.split(" ").reverse().join(" ");
}

console.log(reverse("I like turtles"));

//
// - Write a function called `isNumeric(input)` that takes an input and returns a
// boolean if the input is numeric.

function isNumeric(input) {
    return !isNaN(input);
}

console.log(isNumeric("a"));

//
// - Write a function called `count(input)` that takes in a string and returns the
// number of characters.

function count(input) {
    return input.length;
}

console.log(count("Turtles"));

//
// - Write a function called `add(a, b)` that returns the sum of a and b

function add(a, b) {
    return a + b;
}

console.log(add(7, 3))

// - Write a function called `subtract(a, b)` that return the difference between
// the two inputs.
//
function subtract(a, b) {
    return a - b;
}

console.log(subtract(8, 5));

// - Write `multiply(a, b)` function that returns the product

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 8));

//
// - Write a `divide(numerator, denominator)` function that returns a divided by b
//
// - Write a `remainder(number, divisor)` function that returns the remainder left
// over when dividing `number` by the `divisor`
//
// - Write the function `square(a)` that takes in a number and returns the number
// multiplied by itself.
//
// - Write a function called `sumOfSquares(a, b)` that uses only your `add()` function
// and your square function and not + or * operators
//
// - Write a function called `doMath(operator, a, b)` that takes 3 parameters. The
// first parameter is the name of the math function you want to apply. a and b
// are the two numbers to run that function on.
//
// ## Even More Function Bonuses
//
// 1. Create a function that will return how many whitespace characters are at the
// beginning and end of a string.
//
// 1. Create a function that takes in two string inputs.
//
// - If the second string input is present in the first, return the first input
// string with the second input string removed from it.
// - If the second string input is present multiple times in the first, the
// second string will only be removed where it first occurs in the first
// string.
// - If the second string input is not present in the first, return the first
// string as entered in the function.
//
// 1. Create a function that takes in a string and returns true if the last letter
// is an "a" (otherwise, return false).
//
// 1. EXTRA CHALLENGE: create a function that will return how many whitespace
// characters are at the beginning of a string (hint: use regex).
//
// 1. Create a function `returnTrueMessage()` that returns the string "Hey, it's true!"
//
// - Create a function `returnFalseMessage()` that returns the string "Hey, it's false!"
// - Create a function `returnMessage()` that takes in a function and returns the call to the function
// - Experiement passing in different functions.
//
// 1. Create a function, `willLoginUser()` that takes in a username string,
//     password string, user age, a boolean indicating if they are an admin.
//
//     The function will return true if the username is not the same as the
// password and the user is at least 18 years old. If the user is an admin,
//     they do not have to be a certain age but the password must still not match
// the username.


// In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
//
//
//
//     It will take your current age as the input and console.logs a message with our time left in this format:
//
//     You have x days, y weeks, and z months left.
//
//     Where x, y and z are replaced with the actual calculated numbers.
//
//
//
//     For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.
//
//
//
//     IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.
//
//     Example Input
//
// e.g. If you are 56 years old:
//
//     lifeInWeeks(56)
// Example Output
//
// You have 12410 days, 1768 weeks, and 408 months left.

function howMuchTimeLeft(age) {
    let yearsLeft = 90 - age;
    let daysLeft = yearsLeft * 365;
    let weeksLeft = yearsLeft * 52;
    let monthsLeft = yearsLeft * 12;
    console.log('You have ' + daysLeft + ' days, ' + weeksLeft + ' weeks, and ' + monthsLeft + ' months left.')
}

howMuchTimeLeft(34);

//The first parameter should be the weight and the second should be the height.


/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8);

bmi should equal 20 when it's rounded to the nearest whole number.

*/


function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / (height * height));
    if (bmi < 18.5) {
        return 'Your BMI is ' + bmi + ', so you are underweight.'
    } else if (bmi > 24.9) {
        return 'Your BMI is ' + bmi + ', so you are overweight.'
    } else {
        return 'Your BMI is ' + bmi + ', so you have a normal weight.'
    }
}

console.log(bmiCalculator(99.8, 1.88));

// Write a program that works out whether if a given year is a leap year

//     This is how to work out whether if a particular year is a leap year:
//
//     A year is a leap year if it is evenly divisible by 4 ;
//
// except if that year is also evenly divisible by 100;
//
// unless that year is also evenly divisible by 400.

function isLeap(year) {
    if (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) {
        return 'Leap year.'
    } else {
        return 'Not leap year.'
    }
}

console.log(isLeap(2024))

// write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.


let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"]

function whosPaying(names) {
    let randomNum = Math.floor(Math.random() * names.length);
    return names[randomNum] + ' is going to buy lunch today!';
}

console.log(whosPaying(names))

// function beer(){
//     let beer = 99;
//     while(beer > 0){
//         console.log(beer + ' bottles of beer on the wall, ' + beer + ' bottles of beer. Take 1 down, pass it around, ' + (beer -= 1) + " bottles of beer on the wall.")
//     }
// }
//
// beer();

//fibonacci sequence

function fibonacciGenerator(n) {
    let fibArray = [];
    if (n === 1) {
        fibArray.push(0)
    } else if (n === 2) {
        fibArray.push(0, 1)
    } else {
        fibArray.push(0, 1)
        for (let i = 0; i < n - 2; i++) {
            let nextNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
            fibArray.push(nextNum)
        }
    }
    return fibArray;
}

console.log(fibonacciGenerator(26))



// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.


function sumOfMultiplesOf3And5(){
    let sumOfMultiples = 0;
    for(let i = 0; i<1000; i++){
        if(i % 3 == 0 || i % 5 == 0){
            sumOfMultiples +=i;
        }
    }
    console.log(sumOfMultiples)
}

sumOfMultiplesOf3And5();



// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
//
//     1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
//
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.


function evenFibonacciSum(){
    let sum = 0;
    let fibArray = [1,2];
    for (let i = 0; fibArray[fibArray.length-1] < 3000000 ; i++){
        fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
    }
    for (let i = 0; i < fibArray.length; i++){
        if (fibArray[i] % 2 === 0){
            sum += fibArray[i]
        }
    }
    console.log(fibArray);
    console.log(sum);
}

evenFibonacciSum();


// In this kata, you are asked to square every digit of a number and concatenate them.
//
//     For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.


function squareDigits(num){
    let numArray = Array.from(num.toString()).map(Number);
    let newNum = [];
    for (let i = 0; i < numArray.length; i++){
        newNum.push(numArray[i]*numArray[i])
    }
    return parseInt(newNum.join(""));
}

console.log(squareDigits(998));
