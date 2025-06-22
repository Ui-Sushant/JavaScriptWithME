// ──────────────────────────────────────────────
// ✅ JavaScript Code Execution Steps (Detailed Note)
// ──────────────────────────────────────────────

// 🔹 Execution Context:
// It's like a container where JS code runs. Two main types:
// 1. Global Execution Context (created first)
// 2. Function Execution Context (created when a function is called)

// 🔹 Each Execution Context has:
// - Memory Phase (variables = undefined, functions = stored)
// - Code Execution Phase (runs line by line, assigns values, executes logic)

// 🔹 Call Stack:
// - Stack structure (LIFO — Last In, First Out)
// - Tracks which execution context is currently active

// ──────────────────────────────────────────────
// ✅ Code Example:

function one() {
  two();
}

function two() {
  console.log("Hello from Two");
}

one();

// ──────────────────────────────────────────────
// 🔁 Step-by-step Execution Flow:

// 1. 🌍 Global Execution Context is created
//    - Memory Phase:
//      one = function
//      two = function
//    - Execution Phase:
//      one() is called → new execution context created

// 2. one() Execution Context is pushed to Call Stack
//    - Inside one(), it calls two()
//    - So, two() Execution Context is created and pushed

// 3. two() runs:
//    - Executes: console.log("Hello from Two")
//    - Prints: "Hello from Two"
//    - Done → two() context is popped from stack

// 4. Back to one(), it's also done → pop from stack

// 5. Global context completes → Call Stack is empty

// ──────────────────────────────────────────────
// 🧱 Call Stack Timeline:

// Start:
// | Global Execution Context |

// one() is called:
// | one() Execution Context |
// | Global Execution Context |

// two() is called:
// | two() Execution Context |
// | one() Execution Context |
// | Global Execution Context |

// two() finishes:
// | one() Execution Context |
// | Global Execution Context |

// one() finishes:
// | Global Execution Context |

// Program ends:
// (empty)

// ──────────────────────────────────────────────
// 🧠 Summary:

// ✅ Execution Context is where code runs
// ✅ Call Stack tracks what’s currently running
// ✅ Global → Function → back to Global
// ✅ Each function call = new context pushed to stack
// ✅ When function ends = context popped off

// 💡 Analogy:
// Stack of plates 🍽️ → Last plate added is the first one removed (LIFO)

// ──────────────────────────────────────────────
