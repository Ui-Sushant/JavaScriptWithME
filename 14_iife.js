// ──────────────────────────────────────────────
// 🧠 IIFE — Immediately Invoked Function Expression
// ──────────────────────────────────────────────

// 💡 Definition:
// An IIFE is a function that is executed **immediately after it's defined**.
// It is used to avoid polluting the global scope, especially before ES6 when `let`/`const` didn't exist.

// ──────────────────────────────────────────────
// ✅ Basic Syntax

(function () {
  console.log("This is an IIFE!");
})();

// or using arrow function:
(() => {
  console.log("IIFE with arrow function");
})();

// ──────────────────────────────────────────────
// 📌 Why Use IIFE?

// 1. Scope Isolation
// 2. Encapsulation (like a mini-module)
// 3. Avoid polluting global scope
// 4. Run setup/config logic immediately

// ──────────────────────────────────────────────
// 📦 Real-World Use Case #1: Prevent Global Pollution

(function () {
  const secretKey = "API_KEY_123456";
  const config = { env: "production" };

  console.log("Configured privately:", config);
})();

// console.log(secretKey); ❌ ReferenceError (not accessible outside)

// ──────────────────────────────────────────────
// 📦 Real-World Use Case #2: Fixing closures in loops (pre-ES6)

for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(() => console.log("With IIFE:", j), 1000);
  })(i);
}
// ✅ Output: 0 1 2

// ❌ Without IIFE (using var)
// Will print: 3 3 3 (all point to final `i` value)

// ✅ With let (ES6 fix)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("With let:", i), 1000);
}

// ──────────────────────────────────────────────
// ⚡ When to Use in Modern JavaScript?

// You may still use IIFE when:
// - You want logic to execute instantly
// - You want a private scope without introducing extra blocks
// - You're writing scripts that run in browser without bundler

(() => {
  const appName = "MyApp";
  const init = () => console.log(`${appName} Initialized`);
  init();
})();

// ──────────────────────────────────────────────
// ❓ IIFE vs let/const: Which to use?

// let/const gives block scope (safe inside `{}`)
// IIFE gives function scope — executes immediately

{
  let message = "This is block-scoped";
  console.log(message);
}

// Same logic with IIFE:
(function () {
  let message = "This is function-scoped with IIFE";
  console.log(message);
})();

// Both keep `message` out of the global scope

// ──────────────────────────────────────────────
// ✅ Summary:

// ✅ IIFE = Immediately Invoked Function Expression
// ✅ Avoids global variable pollution
// ✅ Was heavily used before ES6
// ✅ Still useful in setup code, loops, widgets, browser CDN scripts, etc.
// ✅ Great for encapsulating logic without leaving variables exposed


