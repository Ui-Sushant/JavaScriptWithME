// 🧠 JavaScript Variables - var, let, const

// 🔷 What are Variables?
// Variables are containers for storing data values.



// ✅ Types of Variable Declarations:

// | Keyword | Can Reassign? | Block Scoped? | Hoisted? | Recommended? |
// |---------|---------------|----------------|----------|--------------|
// | var     | ✅ Yes         | ❌ No (function scoped) | ✅ Yes (initialized as undefined) | ❌ No (Avoid using) |
// | let     | ✅ Yes         | ✅ Yes           | ✅ Yes (but not initialized) | ✅ Yes |
// | const   | ❌ No          | ✅ Yes           | ✅ Yes (but not initialized) | ✅ Yes (for constants) |

// 🛠 Syntax & Usage:
const accountId = 1441; // ✅ Constant - value can’t be changed
let accountEmail = "sarthak@gmail.com"; // ✅ Changeable
var accountPassword = "hello123"; // ❌ Avoid using var           {  }

accountCity = "Kathmandu"; // ❗ Declares a global variable (not recommended)
let accountState; // ➖ Declared but not assigned → undefined

console.log(accountCity); // ✅ Outputs: Kathmandu

// Updating values
accountEmail = "hello@xyz.com";
accountPassword = "newpass";
accountCity = "Purgatory";

console.table([accountEmail, accountId, accountState, accountPassword ,accountCity]);
// 👇 Output: shows values in tabular format

// ⚠️ Important Notes for Interviews and Projects

// 🔒 const ≠ Immutable Object  
// Many people think that const makes the value “unchangeable”, but that’s only true for primitive types (like numbers, strings).
const person = { name: "Ram" };
person.name = "Shyam"; // ✅ Valid
// person = { name: "Hari" }; ❌ Error

// 📦 var is function scoped (not block scoped)
if (true) {
    var name = "Sushant";
}
console.log(name); // ✅ Accessible → "Sushant"

// 🧱 let and const are block scoped
if (true) {
    let x = 10;
    const y = 20;
}
// console.log(x); ❌ Error: not defined

// 🧨 Hoisting
//Hoisting means JavaScript moves your variable declarations to the top of their scope before running the code.But only var gets initialized as undefined. let and const get hoisted too, but not initialized, so you can’t use them before declaring.

console.log(a); // undefined
var a = 5;

// console.log(b); ❌ Error
let b = 10;

// 🧠 Interview Summary (TL;DR):
// | Feature     | var          | let            |  const         |
// |-------------|--------------|----------------|----------------|
// | Scope       | Function     | Block          | Block          |
// | Reassign    | ✅ Yes       | ✅ Yes          | ❌ No           |
// | Hoisted     | ✅ Yes       | ✅ Yes (TDZ)    | ✅ Yes (TDZ)    |
// | Use Case    | ❌ Avoid     | ✅ Changeable   | ✅ Fixed refs   |
// | Mutable     | ✅ Yes       | ✅ Yes          | ✅ Yes          |

// 🚫 Common Mistakes:
// - Using var inside loops or blocks. {}
// - Declaring variables without let or const (x = 10) → global variable.
// - Thinking const makes object frozen (it doesn’t).

// 🧪 Best Practices:
// ✅ Use const by default.
// 🔁 Use let if value will change.
// ❌ Avoid var in modern JS.
