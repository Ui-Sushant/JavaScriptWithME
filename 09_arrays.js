// ============================================================
// 📦 JavaScript Arrays — Basics & Methods
// ============================================================

// ✅ 1. Declaring Arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Spiderman", "Thor", "Doctor Strange"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(myArr[0]);  // 0 — index starts from 0
console.log(myArr2);

// ✅ 2. Common Array Methods
myArr.push(6);       // Adds 6 at end
myArr.pop();         // Removes last element
myArr.unshift(9);    // Adds 9 at the beginning (⚠️ not efficient)
myArr.shift();       // Removes first element

console.log(myArr.includes(9));   // false (checks if value exists)
console.log(myArr.indexOf(3));    // 2 (returns -1 if not found)

// ✅ 3. `join()` — Converts array to string
const joined = myArr.join("-");
console.log(joined); // "0-1-2-3-4-5"
console.log(typeof joined); // string

// ============================================================
// ✂️ Slice vs Splice
// ============================================================

console.log("Original Array:", myArr);

// 🔹 slice(start, end) → doesn't modify original
const sliceArr = myArr.slice(1, 3); // Gets elements from index 1 to 2
console.log("Sliced:", sliceArr);
console.log("After Slice:", myArr); // Unchanged

// 🔹 splice(start, deleteCount) → modifies original
const spliceArr = myArr.splice(1, 3); // Removes 3 elements starting at index 1
console.log("Spliced:", spliceArr);
console.log("After Splice:", myArr); // Original is changed

/* 
Summary:
Method      | Modifies Original? | Returns
------------|--------------------|--------------------
slice()     | ❌ No               | A copy
splice()    | ✅ Yes              | Removed elements
*/


// ============================================================
// 🦸‍♂️ Combining Arrays
// ============================================================

const marvel = ["Ironman", "Spiderman", "Thor"];
const dc = ["Superman", "Batman", "Flash"];

marvel.push(dc);
console.log(marvel);       // ["Ironman", "Spiderman", "Thor", ["Superman", "Batman", "Flash"]]
console.log(marvel[3][1]); // "Batman" — accessing nested array (not preferred)

// 🔹 concat() → merges & returns new array
const allHeroes = marvel.concat(dc);
console.log(allHeroes); // flat array

// 🔹 spread (...) — modern way to merge
const allNewHeroes = [...marvel, ...dc];
console.log(allNewHeroes); // cleaner and widely used

// 🔹 flat() — flattens nested arrays
const nested = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
const flatArr = nested.flat(Infinity);
console.log(flatArr); // Flattens all levels


// ============================================================
// 🧪 Array Type Check + Conversion
// ============================================================

console.log(Array.isArray("Ironman"));     // false
console.log(Array.from("Ironman"));        // Converts string to array

// Special case:
console.log(Array.from({ name: "Ironman" })); 
// ❌ [] — need to specify key or value extractor → asked in interviews!

// Convert variables to array
let score = 100, score1 = 200, score2 = 300;
console.log(Array.of(score, score1, score2)); // [100, 200, 300]

// ============================================================
// 🧠 Quick Recap for Interviews
// ============================================================

/*
🔸 Arrays are non-primitive and stored in heap memory.
🔸 Common operations: push, pop, shift, unshift, join, slice, splice
🔸 Check: Array.isArray() → true/false
🔸 Convert: Array.from(), Array.of()
🔸 Merge: concat(), spread (...)
🔸 Flatten: flat(depth)
🔸 Interview Trap: Array.from({}) returns [] unless mapped
*/

// 🔗 MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
