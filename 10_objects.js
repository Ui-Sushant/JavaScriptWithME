// =====================================================
// 📦 1. Object Creation (Literals & Singleton)
// =====================================================

// 🧱 Object Literals (Most Common)
const mySym = Symbol("key1");

const jsUser = {
  name: "Hero",
  "full Name": "HeroBrine",
  [mySym]: "myKey1",          // symbol as key
  age: 1000,
  email: "hero@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"]
};

// ✅ Accessing Properties
console.log(jsUser.email);            // Dot notation
console.log(jsUser["full Name"]);     // Bracket notation (for spaces/symbols)
console.log(jsUser[mySym]);           // Symbol key access

// ✅ Modifying & Freezing
jsUser.email = "Herobrine@gmail.com";
Object.freeze(jsUser);                // Prevents modification
jsUser.email = "Blocked@edit.com";    // Won't change
console.log(jsUser);

// ✅ Adding Methods
jsUser.greet = function () {
  console.log("Hello JS users");
};
jsUser.greetUser = function () {
  console.log(`Hello ${this.name}`);
};
jsUser.greet();       // Hello JS users
jsUser.greetUser();   // Hello Hero

// =====================================================
// 🧱 2. Singleton Object (via Constructor)
// =====================================================
const tinderUser = new Object(); // Singleton (interview Q)
const anotherUser = {};         // Non-singleton literal (same result in practice)

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// ✅ Nested Object
const regularUser = {
  email: "itachi@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Itachi",
      lastName: "Uchiha"
    }
  }
};
console.log(regularUser.fullName.userFullName.firstName); // Itachi

// =====================================================
// 🔄 3. Object Merging
// =====================================================
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// ✅ Using spread
const merged = { ...obj1, ...obj2 };
console.log(merged); // {1: 'a', 2: 'b', 3: 'c', 4: 'd'}

// ✅ Using Object.assign()
const merged2 = Object.assign({}, obj1, obj2);
console.log(merged2);

// =====================================================
// 🧾 4. Object in Arrays (Used in APIs)
// =====================================================
const users = [
  { id: 1, email: "u1@gmail.com" },
  { id: 2, email: "u2@gmail.com" },
  { id: 3, email: "u3@gmail.com" }
];

console.log(users[1].email); // u2@gmail.com

// =====================================================
// 🛠️ 5. Object Utility Methods
// =====================================================
console.log(Object.keys(tinderUser));     // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser));   // ['123abc', 'Sammy', false]
console.log(Object.entries(tinderUser));  // [['id', '123abc'], ['name', 'Sammy'], ...]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true

// =====================================================
// 🧨 6. Destructuring Objects
// =====================================================
const course = {
  courseName: "projectMe",
  price: "999999",
  courseInstructor: "WarLord"
};

// ✅ Destructure with rename
const { courseInstructor: instructor } = course;
console.log(instructor); // WarLord

// You can also destructure arrays (less common)