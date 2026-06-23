// Confusing Comparisons with == and ===

// 1. Transitivity Broken (== loose comparison)
console.log(0 == "");    // true
console.log(0 == "0");   // true
console.log("" == "0");  // false  (transitivity fails!)

// 2. null and undefined (== treats them as equal)
console.log(null == undefined);   // true
console.log(null === undefined);  // false
console.log(null == 0);           // false
console.log(null == false);       // false

// 3. NaN is never equal to anything, not even itself
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false

// 4. Array vs primitive coercion
console.log([] == false);   // true  ([] -> "" -> 0, false -> 0)
console.log([] == 0);       // true
console.log([] == "");      // true
console.log([] == ![]);     // true  (both coerce to 0)
console.log([] == []);      // false (different object references)

// 5. Object comparison (reference check)
const a = {};
const b = {};
const c = a;
console.log(a == b);   // false
console.log(a === b);  // false
console.log(a == c);   // true
console.log(a === c);  // true

// 6. Boolean coercion surprises
console.log(true == "1");    // true
console.log(true == "true"); // false
console.log(false == "0");   // true
console.log(false == "");    // true

// 7. String to number coercion
console.log("5" - 1);   // 4
console.log("5" + 1);   // "51"  (string concatenation wins)
console.log(+"5");      // 5  (unary plus coerces to number)

// 8. == vs === with different types
console.log(1 == true);     // true
console.log(1 === true);    // false
console.log(0 == false);    // true
console.log(0 === false);   // false
