// Difference between null vs undefined

// undefined - variable declared but not assigned
let a;
console.log(a);          // undefined
console.log(typeof a);   // "undefined"

// null - explicitly set to "nothing"
let b = null;
console.log(b);          // null
console.log(typeof b);   // "object" (historical JS bug)

// Key differences
console.log(null == undefined);   // true  (loose equality)
console.log(null === undefined);  // false (strict equality - different types)

console.log(Number(null));        // 0
console.log(Number(undefined));   // NaN
