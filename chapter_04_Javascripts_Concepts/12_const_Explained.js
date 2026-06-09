const BaseURL = "https://www.google.com/"; // This is a constant variable that holds the base URL for Google

// BaseURL = "https://www.facebook.com/"; // TypeError: Assignment to constant variable.   This line will throw a TypeError because we cannot reassign a new value to a constant variable.


let name = "Sudhakar";
name = "Rangatte";       // in let we can re-assign but in const we cannot re-assign a new value to a constant variable, so this line will throw a TypeError if name was declared with const instead of let.

console.log(name);

