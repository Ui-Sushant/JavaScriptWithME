// =========================================================
// 📘 Strings in JavaScript – Core Concepts & Methods
// =========================================================

// 1️⃣ Declaring Strings

const name = "Project Me";
const repoCount = 50;

console.log(name + repoCount + "Value"); // Not recommended due to readability
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`); // ✅ Preferred (Template Literal)

// 2️⃣ Strings are Objects (When created with 'new String')
const gameName = new String('COC');
console.log(gameName[0]);        // "C"
console.log(gameName.__proto__); // { ...String methods... }

// =========================================================
// 🔹 Common String Methods
// =========================================================

// ✅ 1. .length → Gives the length of the string
let str1 = "JavaScript";
console.log(str1.length); // 10

// ✅ 2. .toUpperCase() / .toLowerCase()
let str2 = "hello";
console.log(str2.toUpperCase()); // "HELLO"
console.log(str2.toLowerCase()); // "hello"

// ✅ 3. .charAt(index) → Returns the character at a position
let str3 = "game";
console.log(str3.charAt(1)); // "a"

// ✅ 4. .indexOf() / .lastIndexOf() → Finds the index of characters
let str4 = "banana";
console.log(str4.indexOf("a"));      // 1
console.log(str4.lastIndexOf("a"));  // 5

// ✅ 5. .includes() → Checks if substring exists
let str5 = "Hello world";
console.log(str5.includes("world")); // true

// ✅ 6. .startsWith() / .endsWith()
let str6 = "coding";
console.log(str6.startsWith("cod")); // true
console.log(str6.endsWith("ing"));   // true

// ✅ 7. .slice(start, end) → Extracts part of string
let str7 = "JavaScript";
console.log(str7.slice(0, 4)); // "Java"

// ✅ 8. .substring(start, end) → Similar to slice but no negative index
let str8 = "Hello";
console.log(str8.substring(1, 4)); // "ell"

// ✅ 9. .substr(start, length) → Deprecated but works
let str9 = "Hello";
console.log(str9.substr(1, 3)); // "ell"

// ✅ 10. .trim() / .trimStart() / .trimEnd()
let str10 = "   space   ";
console.log(str10.trim());       // "space"
console.log(str10.trimStart()); // "space   "
console.log(str10.trimEnd());   // "   space"

// ✅ 11. .replace() / .replaceAll()
let str11 = "I love JavaScript. JavaScript is awesome.";
console.log(str11.replace("JavaScript", "JS"));     // Replaces first occurrence
console.log(str11.replaceAll("JavaScript", "JS"));  // Replaces all

// ✅ 12. .split() → Splits a string into an array
let str12 = "apple,banana,grape";
console.log(str12.split(",")); // ["apple", "banana", "grape"]

// ✅ 13. .repeat(n) → Repeats a string n times
let str13 = "ha";
console.log(str13.repeat(3)); // "hahaha"

// ✅ 14. .match(regex) → Returns array of matched strings (Regex)
let str14 = "My name is Sam";
console.log(str14.match(/Sam/)); // [ 'Sam', index: 11, ... ]

// =========================================================
// 🧠 Bonus Tips:
// =========================================================
// - Prefer template literals (``) over + for cleaner code
// - Strings in JS are immutable: operations return NEW strings
// - Use MDN docs to explore more string methods and regex patterns

// 🔗 MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// =========================================================
// End of String Notes
// =========================================================
