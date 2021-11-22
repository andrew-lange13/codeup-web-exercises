var a = 1;
var b = a++;
var c = ++a;

console .log(a, b, c);

var d = "hello";
var e = false;

console.log(d++);
console.log(e++);

var perplexed;

console.log(perplexed+2);

var price = 2.7;
console.log(price.toFixed(2));

var price = "2.7";
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

