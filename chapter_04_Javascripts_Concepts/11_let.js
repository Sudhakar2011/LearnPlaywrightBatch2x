let a = 10;
console.log(a); // 10   global variable a is declared and initialized with the value 10, and then it is printed to the console.

// let a = 20; // syntax error , in let we cannot re-declare a variable in the same scope, so this line will throw a syntax error.


let retryCount = 0; // retryCount is declared and initialized with the value 0

retryCount = retryCount + 1;
console.log(retryCount); // 1   the value of retryCount is updated to 1 and printed to the console.


// let retryCount = 5; // syntax error , in let we cannot re-declare a variable in the same scope, so this line will throw a syntax error.

let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log(executionTime); // 1200   executionTime is declared and initialized with the value 1200 inside the if block, and then it is printed to the console.
}

console.log(executionTime); // ReferenceError: executionTime is not defined   executionTime is not accessible outside the if block, so this line will throw a ReferenceError.   

/*
{}
if(){}                      all these are block of code, and in let we have block scope, so variables declared with let are only accessible within the block they are defined in.   
function(){}
*/