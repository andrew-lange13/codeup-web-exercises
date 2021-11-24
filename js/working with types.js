// Exercise 1

let a = 1;
let b = a++;
let c = ++a;

console.log(a, b, c);

let d = "hello";
let e = false;

console.log(d++);
console.log(e++);

let perplexed;

console.log(perplexed + 2);

let price = 2.7;
console.log(price.toFixed(2));

let price = "2.7";
//console.log(price.toFixed(2));

console.log(isNaN(0),

    isNaN(1),

    isNaN(""),

    isNaN("string"),

    isNaN("0"),

    isNaN("1"),

    isNaN("3.145"),

    isNaN(Number.MAX_VALUE),

    isNaN(Infinity),

    isNaN("true"),

    isNaN(true),

    isNaN("false"),

    isNaN(false));

console.log(NaN == NaN);

console.log(!true,

    !false,

    !!true,

    !!false,

    !!0,

    !!-0,

    !!1,

    !!-1,

    !!0.1,

    !!"hello",

    !!"",

    !!'',

    !!"false",

    !!"0");

//    Exercise 2

let sample = "Hello Codeup";

console.log(sample.length);
console.log(sample.toUpperCase());
sample = sample + " Students";
console.log(sample);
sample = sample.replace("Students", "Class");
console.log(sample);
console.log(sample.indexOf("c"));
console.log(sample.indexOf("C"));
console.log(sample.substring(6, 12));


// Exercise 3

let the_little_mermaid = 3, brother_bear = 5, hercules = 1;

console.log((the_little_mermaid * 3) + (brother_bear * 3) + (hercules * 3));

let Google = 400, Amazon = 380, Facebook = 350;

console.log((Amazon * 4) + (Google * 6) + (Facebook * 10));


let classSizeMax = 25, classSize = 12, existingClassTime = 9, classTime = 11,
    studentEnroll = classSize < classSizeMax && classTime !== existingClassTime;

console.log(studentEnroll);


let items = 7, couponExpired = false, validCoupon = items > 2 && couponExpired === false;

console.log(validCoupon);


// Exercise 4

let username = 'codeup';
let password = 'notastrongpassword';

console.log(password.length >= 5);
console.log(!password.includes(username));
console.log(username.length <= 20);
console.log(!username.startsWith(" "));
console.log(!username.endsWith(" "));
console.log(!password.startsWith(" "));
console.log(!password.endsWith(" "));







