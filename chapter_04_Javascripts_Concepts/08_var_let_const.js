var a = 10;
let b = 20;
const c = 30;

console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

var browser = "Chrome";
var browser = "Firefox"; // Re-declaration allowed with var
browser = "Edge"; // Re-assignment allowed with var
console.log(browser); // Edge

console.log("Hi"); // Hi   normal code execution
console.log("Hi"); // Hi
console.log("Hi"); // Hi

function say() {
    console.log("Hi"); // Hi     // Function declaration
}

say(); // Hi              // Function call
say(); // Hi

