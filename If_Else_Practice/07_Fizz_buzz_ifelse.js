
let a = 90;

if (a % 3 === 0 && a % 5 !== 0) {

    console.log("Fizz");

} else if (a % 5 === 0 && a % 3 !== 0) {

    console.log("Buzz");
} else if (a % 3 === 0 && a % 5 === 0) {

    console.log("FizzBuzz");
} else {

    console.log("Invalid number");
}