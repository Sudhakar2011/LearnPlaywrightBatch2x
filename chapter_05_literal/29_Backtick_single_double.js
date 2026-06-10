let name = "Sudhakar";

// Single Quote (' ') - no interpolation, need + concat
let single = 'Hello ' + name;

// Double Quote (" ") - same as single, no interpolation, need + concat
let double = "Hello " + name;

// Backtick (` `) - supports ${} interpolation & multi-line directly
let backtick = `Hello ${name}`;

console.log("single  :", single);
console.log("double  :", double);
console.log("backtick:", backtick);

// Multi-line example
let multiLine = `
Line 1: Hello
Line 2: ${name}
`;
console.log("multi-line:", multiLine);
