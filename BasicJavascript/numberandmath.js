// let x = "100"
// let y = '10'
// console.log(x/y)//this will gave answer in numeric 
 
// output - 10

// console.log(x*y)
// // output -1000
// console.log(x-y)

// Note - number and string number are only + operator concate otherwise all give numeric value


// stirng alphabet and number is not operat any other performance like multipication, 
// division, and substraction that is give nan value
// for example =
// let x = 100
// let y = "samiksha"
// let z= NaN
// console.log(typeof(z))
// // console.log(x/y)// putput = Nan
// // console.log(x*y)// putput = Nan
// // console.log(x-y)// putput = Nan

// // Note = > You can use the global JavaScript function isNaN() to find out if a value is a not a number
// console.log(isNaN(x/y))

// Infinity=> Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
// let num = 2
// while(num!=Infinity){
//     num = num*num
//     console.log(num)
// }
// // console.log(num)


// Number as a object
// normally javascript number are primitive value created from literal

// let x = 10;

// but  number can also defined as a Object using new keyword
// let y = new Number(123)
// console.log(y)
// console.log(typeof(x.toString()))

// tofixed method => toFixed() returns a string, with the number written with a specified number of decimals:
// let num = 100
// console.log(num.toFixed(3))

// precision method => this method used presise the number of value 
// let x = 123.4789
// console.log(x.toPrecision(4)); 
// console.log(x.toPrecision(2)); 

// number method=> he Number() method can be used to convert JavaScript variables to numbers:

// Example


// console.log(Number(true))
// console.log(Number(false))
// console.log(Number("john"))
// console.log(Number("10"))
// console.log(Number("         10"))
// console.log(Number(" 10        "))
// console.log(Number("10.33"))
// console.log(Number("10,33"))
// console.log(Number("10 33"))

// parseInt()=> parseInt() parses a string and returns a whole number. Spaces are allowed. 
// Only the first number is returned:

// console.log(parseInt("-10"));
// console.log(parseInt("-10.33"));
// console.log(parseInt("10"));
// console.log(parseInt("10.33"));
// console.log(parseInt("10 20 30"));
// console.log(parseInt("10 years"));
// console.log(parseInt("years 10"));


// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++

console.log(Math)

// Abs()=> abs methos convert negative value in positive value but positive is not convert negtive 
// positive is as it is return same value

// console.log(Math.abs(-2))
// console.log(Math.abs(5))

// random function return the value between 0 to 1 
console.log(Math.random())
console.log((Math.random()*10) +1)