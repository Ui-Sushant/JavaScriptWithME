// ✅ JavaScript Execution Model & Asynchronous Concepts

// 🔹 JavaScript is synchronous and single-threaded
// → Executes code line by line
// → Has only one call stack (only one task executes at a time)

// 🔸 Blocking vs Non-Blocking Code
// Blocking Code: Waits until the task is finished (e.g., file read in sync)
// Non-blocking Code: Doesn’t wait for task to finish, executes next (e.g., setTimeout, fetch)

// 🔸 JS Runtime Environment Includes:
// - Call Stack: Handles execution context
// - Memory Heap: Stores variables & function memory
// - Web APIs (provided by browser): setTimeout, DOM, fetch, etc.
// - Callback Queue (Task Queue): Stores callbacks from Web APIs
// - Microtask Queue (Promise Queue): Stores resolved promises

// 🔸 Execution Flow:
// 1. Code runs → Call Stack handles synchronous part
// 2. Asynchronous tasks go to Web API (e.g., setTimeout, fetch)
// 3. When task is complete:
//     - setTimeout → Callback Queue
//     - Promise → Microtask Queue
// 4. Event Loop checks if Call Stack is empty
//     - Executes Microtask Queue first
//     - Then Callback Queue

// 🧠 Example to Understand:
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");
// Output: 1 3 2
// Because setTimeout is asynchronous → goes to Web API → Callback Queue
// Even with 0 delay, it's handled after current call stack is clear

// 🔹 Fetch API uses Promises (Microtasks)
// Microtasks have higher priority than setTimeout

console.log("A");

Promise.resolve().then(() => console.log("B"));

setTimeout(() => console.log("C"), 0);

console.log("D");
// Output: A D B C
// Promises are prioritized before setTimeout

// 🔸 Summary of Task Queues Priority:
// Microtask Queue > Callback Queue (setTimeout, setInterval)

// 🔹 Other Key Points:
// - setTimeout is not guaranteed to run at exact time, it’s a *minimum delay*
// - Event Loop is always watching the Call Stack

// ❗ Terms to Know for Interviews:
// - Event Loop
// - Call Stack
// - Web API
// - Callback Queue
// - Microtask Queue (Promise Queue)
// - Blocking vs Non-blocking
// - Synchronous vs Asynchronous
// - fetch() API and Promises

// 📌 Always remember: JavaScript is fast because it’s non-blocking & async-capable!

// 🧁 Imagine JavaScript is a single chef in a kitchen:
//   - Chef can only cook one thing at a time (synchronous)
//   - If a dish takes time (e.g. baking), he uses an assistant (Web API)
//   - Once baked, assistant notifies via a queue → chef picks it when he's free (Event Loop)

// ✅ Analogy Summary:
//   - Call Stack → Chef's task list
//   - Web APIs → Assistants (for timers, fetch)
//   - Callback Queue → Tasks waiting to be picked after timers
//   - Microtask Queue → Urgent promises (faster than timers)
//   - Event Loop → Manages what chef does next

// 📌 JavaScript doesn’t wait — it **delegates work**, continues running, and comes back when ready!

