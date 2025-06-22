// 🟩 CONTROL FLOW NOTES

// ✅ IF STATEMENT
const isUserloggedIn = true;
const temperature = 41;

if (temperature === 40) {
  console.log("less than 50");
} else {
  console.log("temperature is greater than 50");
}

console.log("Execute");

// Comparison Operators:
// <, >, <=, >=, ==, !=, === (strict equal), !== (strict not equal)

const score = 200;

if (score > 100) {
  let power = "fly";
  console.log(`User power: ${power}`);
}

// This will give error because 'power' is block-scoped
// console.log(`User power: ${power}`);

const balance = 1000;

// One-liner if
if (balance > 500) console.log("test"), console.log("test2");

// Else-if ladder
if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}

// ✅ LOGICAL OPERATORS
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 === 3) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in");
}

// ✅ SWITCH STATEMENT
const month = "march";

switch (month) {
  case "jan":
    console.log("January");
    break;
  case "feb":
    console.log("February");
    break;
  case "march":
    console.log("March");
    break;
  case "april":
    console.log("April");
    break;
  default:
    console.log("Default case matched");
    break;
}

// ✅ TRUTHY AND FALSY VALUES
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// Falsy values: false, 0, -0, 0n (BigInt), "", null, undefined, NaN
// Truthy values: "0", 'false', " ", [], {}, function(){}

// Checking if array is empty
if (userEmail.length === 0) {
  console.log("Array is empty");
}

// ✅ HOW TO CHECK EMPTY OBJECT
const emptyObj = {};

// We cannot use `if (emptyObj)` because empty object is truthy.
// So we check keys:
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// ✅ NULLISH COALESCING OPERATOR (??)
// Only checks for null or undefined
//?? returns the first value that is NOT null or undefined.
let val1;
val1 = null ?? 10;         // 10
val1 = undefined ?? 15;    // 15
val1 = 0 ?? 100;           // 0 (not null/undefined)
val1 = false ?? true;      // false (not null/undefined)
val1 = null ?? 10 ?? 20;   // 10 (first non-null/undefined)

console.log(val1);

// ✅ DIFFERENCE BETWEEN || AND ??
let x = 0 || 100; // 100 (0 is falsy)
let y = 0 ?? 100; // 0 (not null/undefined)

// ✅ TERNARY OPERATOR
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
