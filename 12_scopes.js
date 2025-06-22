// {} is called a **scope block** when used inside if-statements, loops, functions, etc.

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

console.log(a); // ❌ ReferenceError: a is not defined
console.log(b); // ❌ ReferenceError: b is not defined
console.log(c); // ✅ 30 — var is function-scoped, not block-scoped
// 👉 So var "leaks" outside the block — that's why we avoid using it!


// 🌍 Global vs Block Scope
let a = 300;

if (true) {
  let a = 10; // block-scoped, does not overwrite global `a`
  const b = 20;
  var c = 30;
  console.log("Inner a:", a); // 👉 10
}

console.log("Outer a:", a); // 👉 300
// Global variables are available inside the block,
// but block-scoped variables (let/const) are NOT available outside.


// 🧩 Scope Levels: Nested Functions
function one() {
  const username = 'Warlord';

  function two() {
    const website = "Project Me";
    console.log(username); // ✅ Can access parent function variable
  }

  // console.log(website); ❌ Cannot access child function variable
  two();
}
one();

// ✅ Inner function can access variables of outer function (lexical scope)
// ❌ Outer function cannot access inner function's variables


// 🔁 Same concept with if-blocks
if (true) {
  const username = "Warlord";

  if (username === "Warlord") {
    const website = "ProjectMe";
    console.log(username + " " + website); // ✅ Accessible
  }

  // console.log(website); ❌ Not accessible outside the inner if
}

// console.log(username); ❌ Not accessible outside the outer if


// 🔄 Function Hoisting Example

// ✅ Works: Function Declaration is hoisted
console.log(addOne(5)); // Output: 6
function addOne(num) {
  return num + 1;
}

// ❌ Error: Cannot access before initialization (Function Expression is NOT hoisted)
console.log(addTwo(5)); // ❌ ReferenceError
const addTwo = function (num) {
  return num + 2;
}

// ✅ Summary:
/// - `function addOne()` is **hoisted**, so it works before declaration.
/// - `const addTwo = function()` is NOT hoisted.
