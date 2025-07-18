// ======================================================
// 📌 JavaScript Comparison Operators & Type Coercion
// ======================================================

// ✅ Basic Comparison Operators (easy to understand)
// >     Greater than
// >=    Greater than or equal to
// <     Less than
// <=    Less than or equal to
// ==    Equality (loose)
// !=    Not equal (loose)

// ✅ Strict Comparison Operators
// ===   Strict equality (compares value and type)
// !==   Strict not equal

// Example:
console.log(2 > 1);       // true
console.log(2 >= 2);      // true
console.log(3 < 5);       // true
console.log(3 <= 2);      // false
console.log(2 == "2");    // true → loose equality (does type conversion)
console.log(2 === "2");   // false → strict equality (type mismatch)

// ✅ Rule of Thumb:
// 👉 Prefer === and !== in modern JavaScript for accurate comparisons

// ======================================================
// ⚠️ Type Coercion in Comparisons
// ======================================================

console.log("2" > 1);      // true → "2" gets converted to number (2 > 1)
console.log("02" == 2);    // true → "02" → 2 == 2

// BUT be careful with null and undefined

// ❗ Tricky Example with null
console.log(null > 0);     // false
console.log(null == 0);    // false
console.log(null >= 0);    // true → Why?

// ❓ Why does null >= 0 return true?
// 👉 Because:
// - Comparisons like >=, <, > convert null to number → 0
// - So null >= 0 becomes 0 >= 0 → true
// - But equality check (==) does NOT convert null to 0 → false

// ❗ Tricky Example with undefined
console.log(undefined > 0);     // false
console.log(undefined < 0);     // false
console.log(undefined == 0);    // false
console.log(undefined >= 0);    // false

// 📌 Summary of null/undefined in comparisons:
// - null is only loosely equal to undefined (null == undefined → true)
// - undefined compared to any number is always false
// - Avoid using null or undefined in mathematical comparisons!

// ✅ Best Practices
// - Always use === for comparison to avoid type coercion confusion
// - Avoid comparing null or undefined with numbers
// - Keep types consistent before comparing

// ✅ Safe comparisons:
let a = 5;
let b = "5";

console.log(a == b);  // true (not recommended)
console.log(a === b); // false (recommended)

// ✅ Always prefer strict comparison unless you have a solid reason!

// ======================================================
// End of Notes
// ======================================================
