// let students = ["Bob", "Fred", "Joe", "Mike", "Jim", "BamBam"];
// console.log(students[1]);
//
//
// let foods = ["smoked brisket", "steak", "tacos", "turkey", "spaghetti"];
// console.log(foods[2]);
// foods[0] += " 1";
// foods[1] += " 2";
// foods[2] += " 3";
// console.log(foods);



////Functions

// function nameOfFunction(num1, num2){
//     return num1 + num2;
// }
//
// console.log(nameOfFunction(4, 5));


//////Methods
//// pre-existing functions

// Math.random()


/////Loops

// let ages = [14, 23, 89, 5, 25, 36];
//
// for (let i = 0; i < ages.length; i++){
//     console.log(ages[i] * 2);
// }

//////for each loops

// const array1 = ['a', 'b', 'c'];
//
// array1.forEach(function (element, index){
//     console.log(element + ' is at index ' + index);
// })



///////manipulating arrays

let samsDogs = ["blue", "luna", "scamp"];
console.log("before methods", samsDogs);

samsDogs.unshift("spot");
console.log("after unshift", samsDogs);

samsDogs.push("rex");
console.log("after push", samsDogs);

samsDogs.pop("rex");
console.log("after pop", samsDogs);

samsDogs.shift("spot");
console.log("after shift", samsDogs);

console.log("luna's index", samsDogs.indexOf("luna"));

// let sliced = samsDogs.slice(0,2);
// console.log("sliced", sliced);

samsDogs.reverse();
console.log("after reverse", samsDogs);

samsDogs.sort();
console.log("after sort", samsDogs);

let samsDogsString = samsDogs.join();
console.log("after join: ", samsDogsString);

let samsDogsArray = samsDogsString.split(",");
console.log("after split: ", samsDogsArray);


///spread operator

console.log([...samsDogs, ...samsDogsArray]);

samsDogs = [9.2, ...samsDogs];

console.log([...samsDogs, 9.2]);









