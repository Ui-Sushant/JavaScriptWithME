"use strict"; // Treat all JS code as newer version
// ✅ It tells JavaScript:
// “Hey, follow the latest strict rules! Don’t allow sloppy mistakes.”

// Note: alert("Hello") only works in browsers, not Node.js

// Code readability must be high

//===============================
// 🧠 Variables
//===============================
let name = "Warlord";
let age = 18;
let isLoggedIN = false;
let state = null;
let me; // undefined

//===============================
// 📚 JavaScript Data Types
//===============================

// 1. Number → Any number (integers, floats)
let score = 42;
// Range: up to 2^53

// 2. BigInt → For very large numbers (rarely used)
let bigNumber = 1234567890123456789012345678901234567890n;

// 3. String → Text, always in quotes (prefer ") 
let username = "Warlord";

// 4. Boolean → true or false
let isOnline = true;

// 5. Null → Intentional absence of any value (interview Q: typeof null is "object")
let emptyValue = null; 

// 6. Undefined → Variable declared but not assigned any value
let futureData;

// 7. Symbol → Used to create unique identifiers (advanced usage)
const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); // false

// ✅ Why false?

// Even though both Symbols have the same description "123", they are guaranteed to be unique.

// Think of Symbol("123") like two different people wearing the same name tag. The name looks the same, but they are different people!


// 8. Object → Used to store collections of data
const person = {
  name: "John",
  age: 30,
};

//===============================
// 🤔 Interview Questions
//===============================

console.log(typeof null); // "object" (known JavaScript bug)
console.log(typeof undefined); // "undefined"
console.log(typeof username); // it will return string

//===============================
// 🔁 Summary
//===============================
// Primitive Data Types:
// These are immutable (can’t be changed) and stored directly.
// - Number
// - BigInt
// - String
// - Boolean
// - Null
// - Undefined
// - Symbol

// Non-Primitive:
// Stored by reference, mutable, and can hold collections.
// - Object (includes Arrays, Functions, etc.)
