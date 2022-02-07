'use strict'

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

// let languageUsers = users.filter(user => user.languages.length >= 3)
//
// console.log(languageUsers);

// Use .map to create an array of strings where each element is a user's email address

// let userEmail = users.map(user => user.email)
//
// console.log(userEmail);

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

// let experience = users.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue.yearsOfExperience
// }, 0)
//
// console.log(experience);
//
// let averageExperience = experience / users.length
//
// console.log(averageExperience)

// Use .reduce to get the longest email from the list of users.

// let longestEmail = users.reduce(function (a,b) {
//     return a.email.length > b.email.length ? a : b;
// }).email;
//
// console.log(longestEmail);

// let longestEmail = users.reduce((previousValue, currentValue) => {
//     return previousValue.email.length > currentValue.email.length ? previousValue : currentValue
// }).email;
//
// console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

// let nameString = users.reduce((a, b) => [
//     ...a, b.name], []).join(", ");
//
// let nameString = users.reduce((prev, curr) =>
//     (prev.name ? prev.name : prev) + ", " + curr.name
// )

// let nameString = users.reduce((previousValue, currentValue, index) => {
//     if(index === users.length -1){
//         return previousValue + currentValue.name + "."
//     } else {
//         return previousValue + currentValue.name + ", "
//     }
// },"Your Instructors are: ");
//
// console.log(nameString);

// Use .reduce to get the unique list of languages from the list of users.


// let languageList = users.reduce((previousValue, currentValue) => {
//     currentValue.languages.forEach(element => {
//         if(!previousValue.includes(element)){
//             previousValue.push(element)
//         }
//     })
//     return previousValue
// },[])
//
// console.log(languageList);

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

// Create an array of the first letters of each fruit

// let fruitLetter = fruits.map((fruit) =>{
//     return fruit[0]
// })
//
// console.log(fruitLetter);

// Create array of user objects based on the customers array of objects (each user object should just have name and age properties)

// let customersObj = customers.map(({name, age}) => ({name, age}))
// console.log(customersObj)

// Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects

// let civilServantCustomers = customers.map(({name, age, occupation, noOfPurchases})=>({
//     name, age, occupation, noOfPurchases
// }))
//
// console.log(civilServantCustomers);

// Determine the average age of all the customers

// let customerAge = customers.reduce((previousValue, currentValue) => {
//     return (previousValue + currentValue.age);
// }, 0)
//
// console.log(customerAge/customers.length);

// Create a function makeSuperPet() that takes in the pets array as input and returns a single pet object with the following shape...
//
// {
//     name: ALL_PET_NAMES_CONCATENATED_INTO_A_SINGLE_STRING,
//         age: THE_TOTAL_OF_ALL_PET_AGES,
//     breed: THE_FIRST_LETTERS_OF_ALL_PET_BREEDS_CONCATENATATED_INTO_A_SINGLE_STRING
// }

