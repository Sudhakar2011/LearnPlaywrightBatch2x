
// Template literal concept in JS



let firstName = "Sudhakar";
let fullName = `Hi ${firstName} Rangatte`;

console.log(fullName);

let env = "staging";
env = "production";

let userId = 1001;
let url = `https://www.something.com/${env}/users/${userId}`;

console.log(url);