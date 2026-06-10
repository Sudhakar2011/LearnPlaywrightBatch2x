let decimal = 100; // decimal integer
let negative = -50; // negative integer
let floating = 3.14; // floating-point
let exp = 1.5e3; // exponential (1500)
let hex = 0xFF; // hexadecimal (255)
let oct = 0o77; // octal (63)
let bin = 0b1010; // binary (10)
let big = 123n; // BigInt
let inf = Infinity; // Infinity
let negInf = -Infinity; // -Infinity
let notANum = NaN; // NaN
let sep = 1_000_000; // numeric separator (1000000)

console.log("decimal:", decimal, typeof decimal);
console.log("negative:", negative, typeof negative);
console.log("floating:", floating, typeof floating);
console.log("exponential:", exp, typeof exp);
console.log("hexadecimal:", hex, typeof hex);
console.log("octal:", oct, typeof oct);
console.log("binary:", bin, typeof bin);
console.log("BigInt:", big, typeof big);
console.log("Infinity:", inf, typeof inf);
console.log("-Infinity:", negInf, typeof negInf);
console.log("NaN:", notANum, typeof notANum);
console.log("separator:", sep, typeof sep);
