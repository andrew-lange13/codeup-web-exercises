'use strict'
///// showMultiplicationTable

// function showMultiplicationTable(n) {
//     console.log(n * x);
//     console.log(n * 2);
//     console.log(n * 3);
//     console.log(n * 4);
//     console.log(n * 5);
//     console.log(n * 6);
//     console.log(n * 7);
//     console.log(n * 8);
//     console.log(n * 9);
//     console.log(n * 10);
// }

// showMultiplicationTable(7);


// for (let x = 1; x <= 10; x++) {
//     function showMultiplicationTable(n) {
//         return (n * x);
//     }
//
//     console.log(showMultiplicationTable(6))
// }

////// randomBoolean

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor((Math.random() * (201 - 20)) + 1);

    function randomBoolean() {
        if (randomNum % 2 === 0) {
            return randomNum + " is Even"
        } else {
            return randomNum + " is Odd"
        }
    }

    console.log(randomBoolean());
}

console.log(typeof true)