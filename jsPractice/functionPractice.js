// function isTodayAGoodDayToFly(isCloudy, planesFlying) {
//     if (!isCloudy && planesFlying < 10) {
//         console.log("It is a good day to fly!!!!");
//     } else {
//         console.log("It is not a good day to fly!!!");
//     }
//
// }
//
// isTodayAGoodDayToFly(true, 4);


/*function add(x, y) {
    return (x + y);
}

console.log(add(4, 4));

function subtractify(x, y) {
    return (x - y);
}

console.log(subtractify(11, 8));

function multiply(x, y) {
    return (x * y);
}

console.log(multiply(7, 11));

function divide(x, y) {
    return (x / y);
}


console.log(divide(9, 3));

function remainder(x, y) {
    return (x % y);
}

console.log(remainder(7, 3));*/


// function bowlingAverage(score1, score2, score3) {
//     return (score1 + score2 + score3) / 3;
// }
//
// console.log(bowlingAverage(180, 190, 210));

////////

// let highScore = Math.max(190, 240, 110);
//
//
// function bowlingBestScore(n) {
//     if (n % 5 === 0 || n % 3 === 0) {
//         return "true"
//     } else {
//         return "false"
//     }
// }
//
// console.log(bowlingBestScore(highScore));

/////

// function bowlingName(name) {
//     return name.toLowerCase();
// }
//
// console.log(bowlingName("ThEbEsTbOwLiNgPlAcEever"))

/////

// let score = 109
// let name = "bowling Is Fun";
// let isBowlingFun = true;
// let players = ["tom", "jerry", "Garfield"]
//
// function bowlingType(score, name, isBowlingFun, players) {
//     if (score) {
//         return typeof score
//     } else if (name) {
//         return typeof name
//     } else if (isBowlingFun) {
//         return typeof isBowlingFun
//     } else if (players) {
//         return typeof players
//     }
// }
//
// console.log(bowlingType(players));


////
//
// function executeAll(func1, func2, func3, func4) {
//     func1();
//     func2();
//     func3();
//     func4();
// }
//
// console.log(bowlingAverage(),bowlingBestScore(),bowlingName(),bowlingType());

////

// function myFunction(firstName, lastName) {
//     return firstName + " " + lastName;
// }
//
// console.log(myFunction("Rob", "Robertson"));

/////


// function thatsNotMyName(name) {
//     if (name === "Laura") {
//         return "that's me!, I'm " + name
//     } else {
//         return "that's not my name"
//     }
// }
//
// console.log(thatsNotMyName("Laura"))

////
//
// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223

// function reverseNumber(num){
//     return num.toString().split("").reverse().join("")
// }
//
// console.log(reverseNumber(4578));

//
// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

// function isPalindrome(string){
//     let checkString = string.toLowerCase().replace(/[^a-zA_Z0-9]+/g, "");
//     if (string === string.split("").reverse().join("")){
//         return "This is a palindrome"
//     } else{
//         return "Nope, not a palindrome"
//     }
// }
//
// console.log(isPalindrome("madam"))

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g



//
// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. Go to the editor
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

//
// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. Go to the editor
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

//
// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
//     Example string : 'The quick brown fox'
// Expected Output : 5

//
// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. Go to the editor
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

//
// 9. Write a JavaScript function which accepts an argument and returns the type. Go to the editor
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

//
// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. Go to the editor

//
// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. Go to the editor
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

//
// 12. Write a JavaScript function which says whether a number is perfect. Go to the editor
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

//
// 13. Write a JavaScript function to compute the factors of a positive integer. Go to the editor

//
// 14. Write a JavaScript function to convert an amount to coins. Go to the editor
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//     Output : 25, 10, 10, 1

//
// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. Go to the editor

//
// 16. Write a JavaScript function to extract unique characters from a string. Go to the editor
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

//
// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. Go to the editor

//
// 18. Write a function for searching JavaScript arrays with a binary search. Go to the editor
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

//
// 19. Write a JavaScript function that returns array elements larger than a number. Go to the editor

//
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. Go to the editor
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. Go to the editor
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

//
// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Go to the editor
// Sample arguments : 'w3resource.com', 'o'
// Expected output : 2

//
// 23. Write a JavaScript function to find the first not repeated character. Go to the editor
// Sample arguments : 'abacddbec'
// Expected output : 'e'

//
// 24. Write a JavaScript function to apply Bubble Sort algorithm. Go to the editor
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".
//     Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

//
// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. Go to the editor
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

//
// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. Go to the editor

//
// 27. Write a JavaScript function that returns the longest palindrome in a given string. Go to the editor
//
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three, but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one substring or returning the maximum length of a palindromic substring.

//
// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. Go to the editor

//
// 29. Write a JavaScript function to get the function name. Go to the editor
