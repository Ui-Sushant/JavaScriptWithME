// ============================================================
// 📅 JavaScript Date Object — Must-Know Concepts
// ============================================================

// ✅ 1. Creating a Date
let myDate = new Date();  // Current date and time

console.log(myDate);               // Full date object
console.log(myDate.toString());    // "Fri Jun 13 2025 17:12:03 GMT+0545"
console.log(myDate.toDateString()); // "Fri Jun 13 2025"
console.log(myDate.toTimeString()); // "17:12:03 GMT+0545"
console.log(myDate.toLocaleString()); // Local format
console.log(myDate.toJSON());     // ISO string (useful for API)

// Interview Tip: ✅ "What type is Date in JS?"
// ➤ Answer: Object

// ✅ 2. Creating Custom Dates

// Format: new Date(year, monthIndex, day, hours, minutes)
// Month is 0-indexed → Jan = 0, Dec = 11
let date1 = new Date(2025, 0, 21); 
let date2 = new Date(2023, 0, 23, 5, 3); 
let date3 = new Date("01-14-2023"); // MM-DD-YYYY (or use "2023-01-14")

console.log(date1.toLocaleString()); // "1/21/2025, 12:00:00 AM"
console.log(date2.toLocaleString()); // "1/23/2023, 5:03:00 AM"
console.log(date3.toLocaleString()); // "1/14/2023, 12:00:00 AM"


// ✅ 3. Commonly Used Date Methods
const today = new Date();

console.log(today.getFullYear()); // 2025
console.log(today.getMonth());    // 0–11 (add +1 for real month)
console.log(today.getDate());     // Day of the month (1–31)
console.log(today.getDay());      // Day of week (0–6) → Sunday = 0
console.log(today.getHours());    // 0–23
console.log(today.getMinutes());  // 0–59
console.log(today.getSeconds());  // 0–59

// ✅ 4. Working with Timestamps (used in backend, comparisons)
let timestamp = Date.now();
console.log(timestamp); // Number of ms since Jan 1, 1970
console.log(new Date(timestamp).toLocaleString()); // Convert back to readable format

// ✅ 5. Convert to Time in ms (for comparing two dates)
let dateA = new Date("2023-01-14");
let dateB = new Date("2025-06-13");

console.log(dateB.getTime() > dateA.getTime()); // true

// ✅ 6. Custom Formatting (Not built-in, use libraries like day.js or Intl API)
// Example using toLocaleDateString
console.log(today.toLocaleDateString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
})); // "Friday, 13 June 2025"

// ============================================================
// 🧠 Summary (What to Remember)
// ============================================================

// 🔹 Date is an object in JS (not a primitive).
// 🔹 Use `new Date()` to create current or custom dates.
// 🔹 Date is often used for logging, sorting, comparing.
// 🔹 Use `toLocaleString()` for readable formats.
// 🔹 Use `getTime()` for comparing or storing time values.

// 🔗 MDN Docs → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// ============================================================
// ✋ Skip the advanced parts (like timezone handling, parsing formats, etc.)
//    unless you're working with calendars, APIs, or timezones.
// ============================================================
