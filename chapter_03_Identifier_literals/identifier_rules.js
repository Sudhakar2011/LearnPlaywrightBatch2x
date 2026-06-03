// ===== RULES FOR IDENTIFIERS IN JAVASCRIPT =====

// 1. Must start with a letter, underscore (_), or dollar sign ($)
let name = "John";
let _count = 10;
let $price = 99.99;

// 2. Subsequent characters can include digits (0-9)
let item1 = "apple";
let orderId2 = 101;
let page_1_section_2 = "intro";

// 3. Cannot be a reserved keyword (these will cause errors)
// let let = 5;       // SyntaxError
// let const = 10;    // SyntaxError
// let if = true;     // SyntaxError

// 4. Case-sensitive
let myVar = "hello";
let MyVar = "world";
let MYVAR = "!!";
console.log(myVar, MyVar, MYVAR); // "hello world !!"

// 5. Unicode letters are allowed
let ñoño = "cute";
let étudiant = "student";
let 日本語 = "Japanese";
let π = 3.14159;
console.log(ñoño, étudiant, 日本語, π);

// 6. No spaces or special characters (except _ and $)
// let my var = 5;    // SyntaxError: space not allowed
// let my-var = 5;    // SyntaxError: hyphen not allowed
// let my@var = 5;    // SyntaxError: @ not allowed
// let my.var = 5;    // SyntaxError: dot not allowed

// ===== SUMMARY OF VALID vs INVALID =====
/*
| Valid             | Invalid             | Reason          |
|-------------------|---------------------|-----------------|
| myVariable        | my variable         | space           |
| _private          | 1stPlace            | starts with digit|
| $dollar           | my-var              | hyphen          |
| camelCase         | let                 | reserved keyword|
| étudiant          | my@var              | special char    |
| π                 | my.var              | dot             |
*/

console.log("All identifier examples ran successfully!");
