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


function bowlingAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

console.log(bowlingAverage(180, 190, 210));

////////

let highScore = Math.max(190, 240, 110);


function bowlingBestScore(n) {
    if (n % 5 === 0 || n % 3 === 0) {
        return "true"
    } else {
        return "false"
    }
}

console.log(bowlingBestScore(highScore));

/////

function bowlingName(name) {
    return name.toLowerCase();
}

console.log(bowlingName("ThEbEsTbOwLiNgPlAcEever"))

/////

let score = 109
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"]

function bowlingType(score, name, isBowlingFun, players) {
    if (score) {
        return typeof score
    } else if (name) {
        return typeof name
    } else if (isBowlingFun) {
        return typeof isBowlingFun
    } else if (players) {
        return typeof players
    }
}

console.log(bowlingType(players));


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

function myFunction(firstName, lastName) {
    return firstName + " " + lastName;
}

console.log(myFunction("Rob", "Robertson"));

/////


function thatsNotMyName(name) {
    if (name === "Laura") {
        return "that's me!, I'm " + name
    } else {
        return "that's not my name"
    }
}

console.log(thatsNotMyName("Laura"))

////