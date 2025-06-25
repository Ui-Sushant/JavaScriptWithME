// ======================================================
// 📦 Memory in JavaScript – Stack vs Heap
// ======================================================

// 🧠 JavaScript handles memory in two main areas:
// 1️⃣ Stack Memory (used for primitive types)
// 2️⃣ Heap Memory (used for non-primitive/reference types)


// ======================================================
// 1️⃣ Stack Memory – for Primitive Data Types
// ======================================================

// 🧩 Stack stores *primitive* values (copied directly)
// ✅ Fast access, fixed-size memory

// 🟩 Primitive Types (copied by value):
// ------------------------------------------------------
// | Type     | Example                                 |
// ------------------------------------------------------
// | String   | let name = "Sushant";                   |
// | Number   | let age = 18;                           |
// | Boolean  | let isLoggedIn = true;                  |
// | Null     | let empty = null;                       |
// | Undefined| let temp;                               |
// | Symbol   | let id = Symbol("unique");              |
// | BigInt   | let big = 1234567890123n;               |
// ------------------------------------------------------


// 🧪 Example:
let myYoutubeName = "Project-Me";
let anotherName = myYoutubeName;
anotherName = "LevelUpWithMe";

console.log(myYoutubeName);  // "Project-Me"
console.log(anotherName);    // "LevelUpWithMe"

// ✅ Here, `anotherName` is a copy, not a reference to `myYoutubeName`

// ======================================================
// 2️⃣ Heap Memory – for Non-Primitive (Reference) Types
// ======================================================

// 🧩 Heap stores *non-primitive* values (objects, arrays, functions)
// 🔁 Variables store a *reference* (not actual value) to the heap

// 🟨 Non-Primitive Types (copied by reference):
// ------------------------------------------------------
// | Type     | Example                                 |
// ------------------------------------------------------
// | Object   | let user = { name: "Ram" };             |
// | Array    | let nums = [1, 2, 3];                   |
// | Function | function greet() { ... }               |
// ------------------------------------------------------

// 🧪 Example:
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
};

let userTwo = userOne; // 🔁 userTwo points to the same heap object
userTwo.email = "me@gmail.com";

console.log(userOne.email);  // "me@gmail.com"
console.log(userTwo.email);  // "me@gmail.com"

// ⚠️ Changing userTwo also changes userOne
// 🧠 Because both point to the SAME object in heap memory

// ======================================================
// 🧠 Summary Table
// ======================================================
// | Memory Type | Used For            | Copied As | Mutable |
// |-------------|---------------------|-----------|---------|
// | Stack       | Primitive Types     | By Value  | ❌      |
// | Heap        | Reference Types     | By Ref    | ✅      |
// ------------------------------------------------------

// 🔁 Common Interview Q:
// Q: Why do objects behave differently from strings in memory?
// A: Because objects are stored in the HEAP and passed by reference,
//    while strings are stored in STACK and copied by value.


// ✅ Good Practice:
// - Be careful when assigning objects/arrays → clone if needed
//   Example: let clone = { ...original };
// - Avoid direct reference unless intentional

// ======================================================
// End of Notes
// ======================================================