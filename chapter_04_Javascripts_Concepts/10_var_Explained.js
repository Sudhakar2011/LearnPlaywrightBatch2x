var a = 10;

console.log(a); // 10   global variable a is declared and initialized with the value 10, and then it is printed to the console.

function printHello() {
    console.log("Welcome to functions"); // Welcome to functions   function declaration named printHello is defined, which logs a message to the console when called.

    var a = 20; // local variable a is declared and initialized with the value 20 inside the function printHello. This variable is different from the global variable a.
    console.log(a); // 20   the local variable a is printed to the console, which outputs 20.

    if (true) {
        var a = 30; // variable a is re-declared and initialized with the value 30 inside the if block. This variable is still accessible outside the block due to var's function scope.
    }
    console.log(a); // 30   the variable a is printed to the console, which outputs 30.
}
printHello(); // Welcome to functions 20 30   the function printHello is called, which executes the code inside it and prints the respective values to the console.

console.log(a); // 10   the global variable a is printed to the console again, which outputs 10, demonstrating that the local variable a inside the function does not affect the global variable a.


