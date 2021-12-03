'use strict'
/////////
// Create a while loop that uses console.log() to create the output shown below.

// let i = 2
// while (i <= 65536){
//     console.log(i);
//     i *= 2;
// }




////// An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.

// let allCones = Math.floor(Math.random() * 50) + 50;
//
//
// do {
//     let coneSale = Math.floor(Math.random() * 5) + 1;
//     if (allCones > 5) {
//         allCones -= coneSale;
//         console.log((coneSale) + " cones sold!")
//     } if (coneSale > allCones) {
//         console.log("Cannot sell you " + coneSale + " I only have " + allCones);
//     } if (allCones === 0){
//         console.log("Yay! I sold them all!")
//     }
// } while (allCones >= 0);



// let allCones = Math.floor(Math.random() * 50) + 50;
//
// do {
//     let conesToSell = Math.floor(Math.random() * 5) + 1;
//     if(conesToSell <= allCones){
//         console.log(conesToSell + "cones sold");
//         allCones -= conesToSell;
//     } else {
//         console.log("Cannot sell you " + conesToSell + " cones, I only have " + allCones);
//     }
//
//     console.log(allCones)
//
//
//
// } while(allCones > 0)
//
// console.log("Yay! I sold them all");