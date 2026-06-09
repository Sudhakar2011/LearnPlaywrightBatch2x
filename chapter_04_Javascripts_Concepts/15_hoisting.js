console.log(greeting); // undefined due to hoisting

var greeting = "Hello, World!";

console.log(greeting); // "Hello, World!" after assignment


var a;
console.log(a); // undefined due to hoisting

a = "Sudhakar";
console.log(a); // "Sudhakar" after assignment


// Function hoisting example

// var greeting ; // Variable declaration is hoisted, but not the assignment

// console.log(greeting); // undefined due to hoisting

// greeting = "Hello, World!"; // Variable assignment

// console.log(greeting); // "Hello, World!" after assignment   