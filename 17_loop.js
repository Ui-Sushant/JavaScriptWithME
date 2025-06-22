// ✅ JavaScript Loop Notes

// 1️⃣ For Loop
for (let i = 0; i < 10; i++) {
  console.log(i); // Prints 0 to 9
}

// 2️⃣ Nested For Loop
for (let i = 0; i < 3; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 0; j < 2; j++) {
    console.log(`  Inner loop value: ${j}`);
  }
}

// 3️⃣ Looping Over Arrays
let myArr = ["flash", "batman", "superman"];
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
}

// 4️⃣ Break Statement - exits loop when condition met
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("5 is detected");
    break;
  }
  console.log(`Value of i is ${i}`);
}

// 5️⃣ Continue Statement - skips current iteration
for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("5 is detected");
    continue;
  }
  console.log(`Value of i is ${i}`);
}

// 6️⃣ While Loop - checks condition before running
let i = 0;
while (i <= 10) {
  console.log(`value of i is ${i}`);
  i++;
}

// While Loop with Array
let index = 0;
while (index < myArr.length) {
  console.log(`Value is ${myArr[index]}`);
  index++;
}

// 7️⃣ Do While Loop - runs at least once
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// 🔁 Summary Table (for reference)
// for       → Use when you know how many times to loop
// while     → Use when the condition needs to be checked before each run
// do while  → Use when block must run at least once
// break     → Exits loop early
// continue  → Skips current loop iteration