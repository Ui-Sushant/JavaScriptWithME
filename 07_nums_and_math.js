// ==========================================================
// 📘 JavaScript Numbers & Math Methods (with Examples)
// ==========================================================

// 🔹 Declaring Numbers
const credit = 500;
const balance = new Number(200); // Not recommended — creates a Number object

console.log(balance); // [Number: 200]
console.log(credit);  // 500

// 🔸 Convert Number to String
console.log(balance.toString());        // "200"
console.log(balance.toString().length); // 3

// 🔸 .toFixed(digits) → Formats number with fixed decimals
console.log(balance.toFixed(2)); // "200.00" (string)

// 🔸 .toPrecision(n) → Formats to n significant digits
const otherNumber = 23.8996;
console.log(otherNumber.toPrecision(3)); // "23.9"

// 🔸 .toLocaleString() → Adds commas for readability
const hundreds = 100000;
console.log(hundreds.toLocaleString('en-IN')); // "1,00,000" (Indian format)


// ==========================================================
// 🔹 MATH OBJECT — Built-in JavaScript Math Library
// ==========================================================

// ✅ Absolute Value
console.log(Math.abs(-4)); // 4

// ✅ Rounding Methods
console.log(Math.round(4.6));  // 5 (nearest integer)
console.log(Math.floor(4.9));  // 4 (rounds down)
console.log(Math.ceil(4.1));   // 5 (rounds up)

// ✅ Min / Max
console.log(Math.max(4, 5, 3, 6, 8)); // 8
console.log(Math.min(4, 3, 6, 8, 9)); // 3

// ✅ Random Number between 0 and 1
console.log(Math.random()); // Example: 0.54849

// ✅ Random Integer between 1 to 10 (inclusive)
console.log(Math.floor(Math.random() * 10) + 1); 

// ✅ Random Integer in Custom Range (min to max)
const min = 10;
const max = 20;

// Formula → Math.floor(Math.random() * (max - min + 1)) + min;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// ==========================================================
// 🔍 Summary
// ==========================================================

// 🔹 Use `toFixed()` to limit decimal places (for currency, etc.)
// 🔹 `toPrecision()` is useful for scientific/engineering output
// 🔹 `toLocaleString()` is great for formatting readable large numbers
// 🔹 Use `Math.random()` + `Math.floor()` to generate integers
// 🔹 Math functions are very useful in games, simulations, validations

// 🔗 MDN Docs → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// ==========================================================
// End of Number & Math Notes
// ==========================================================