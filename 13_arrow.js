// 🔹 JavaScript Notes – `this`, Object Methods & Arrow Functions

// 🧱 Object with Method and `this`
const user = {
  username: "Warlord",
  price: 9000,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to ProjectMe`);
    console.log(this); // refers to the current object
  }
};

user.welcomeMessage(); // Warlord
user.username = "Mihawk";
user.welcomeMessage(); // Mihawk

// 🧠 Global `this` Behavior
console.log(this); 
// In Node.js: {} (empty object)
// In Browser: window object

// ❌ `this` in Normal Function
function chai() {
  let username = "Warlord";
  console.log(this.username); // undefined
  console.log(this); // global object (in Node or browser)
}
chai();

// 🔁 Scope Behavior in If Block
if (true) {
  const username = "Warlord";
  if (username === "Warlord") {
    const website = "ProjectMe";
    console.log(username + website); // ✅ Works
  }
  // console.log(website); ❌ Error: website is not defined
}
// console.log(username); ❌ Error: username is not defined

// ⚡ Arrow Functions
const addTwo1 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo1(3, 4)); // 7

// ✅ Shorter version
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(3, 4)); // 7

// ✅ Returning objects in arrow function (must use parentheses)
const addTwo3 = (num1, num2) => ({ username: "Warlord" });
console.log(addTwo3()); // { username: 'Warlord' }

// 🔄 Arrow Function in Array Methods
const myArray = [1, 2, 3];
myArray.forEach((item) => {
  console.log(item); // 1, 2, 3
});

// ⚠️ Function Hoisting

// Function Declaration - Hoisted
addOne(5); // ✅ Works
function addOne(num) {
  return num + 1;
}

// Function Expression - Not Hoisted
// addTwo(5); ❌ Error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};
console.log(addTwo(5)); // ✅ 7

// ✅ Summary:
// - `this` works in objects, not in regular or arrow functions
// - Arrow functions return implicit results if written without {}
// - Use parentheses to return objects in arrow functions
// - Function declarations are hoisted; expressions are not
