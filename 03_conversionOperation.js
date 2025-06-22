<<<<<<< HEAD
// ===============================
// JavaScript Type Conversion & Operations
// ===============================

// ✅ Example 1: Converting String to Number
let score = "33abc";

console.log(typeof score);            // string
console.log(typeof(score));           // string (same as above)

// Try converting the string to a number using Number()
let valueInNumber = Number(score);
console.log(typeof valueInNumber);    // number → JS thinks it's a number
console.log(valueInNumber);           // NaN → Not a Number because "33abc" is not a valid number

// 📌 Summary of String → Number conversion:
console.log(Number("33"));       // ✅ 33 (valid numeric string)
console.log(Number("33abc"));    // ❌ NaN (not valid)
console.log(Number(true));       // ✅ 1
console.log(Number(false));      // ✅ 0
console.log(Number(null));       // ✅ 0
console.log(Number(undefined));  // ❌ NaN (undefined can't be converted to number)

// ✅ Example 2: Converting to Boolean
let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); // true

// 📌 Summary of Boolean conversion:
console.log(Boolean(1));        // true
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false (empty string is false)
console.log(Boolean("hello"));  // true (non-empty string is true)

// ✅ Example 3: Converting to String
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);         // "33"
console.log(typeof stringNumber); // string

// ===============================
// JavaScript Arithmetic & Operators
// ===============================

// Basic math operations
let value = 3;
let negValue = -value;  // Makes it negative
console.log(negValue);  // -3

// ✅ JavaScript arithmetic operators:
// +   addition
// -   subtraction
// *   multiplication
// /   division
// %   modulus (remainder)
// **  exponentiation (power)

// ✅ String Concatenation using +
let str1 = "hello";
let str2 = "mello";
let str3 = str1 + str2;
console.log(str3); // hellomello

// Tricky examples:
console.log("1" + 2);       // "12" → string + number = string
console.log(1 + "2");       // "12" → number + string = string
console.log("1" + 2 + 2);   // "122" → first "1"+2 is "12", then "12"+2 = "122"
console.log(1 + 2 + "2");   // "32" → 1+2 = 3, then 3+"2" = "32"

// ❗ Avoid writing code like this:
console.log(+true);  // 1 → `true` becomes 1
console.log(+"");    // 0 → empty string becomes 0

// These work, but they reduce readability and are not beginner-friendly

// ✅ Multiple assignment (Avoid this in real projects)
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;  // All get assigned 4
console.log(num1, num2, num3); // 4 4 4

// ❌ Avoid such one-liners. Not readable.
// ✔ Prefer readable code like:
let a = 4;
let b = 4;
let c = 4;

// ===============================
// Increment Operators
// ===============================

let gameCounter = 100;

// Pre-increment: ++i → increments first, then returns value
// Post-increment: i++ → returns current value, then increments

console.log(++gameCounter); // 101 (increment, then use)

// Another Example:
let i = 5;
console.log(i++); // 5 → prints 5, then increases to 6
console.log(i);   // 6

let j = 5;
console.log(++j); // 6 → increases first, then prints
console.log(j);   // 6

// ===============================
// Best Practices
// ===============================

// ✅ Always keep your code clean and readable
// ✅ Use Number(), Boolean(), and String() for clear conversion
// ❌ Avoid tricky shortcuts like +true or +"" in real projects
// ✅ Understand JavaScript does type coercion (automatic conversion)
//    This can be helpful but also confusing — be explicit when needed

// ===============================
// Summary
// ===============================

// JS tries to be helpful by auto-converting types, but:
//   "33abc" → NaN
//   ""     → 0 when converted to number
//   true   → 1
//   false  → 0

// So always use clear conversions and avoid confusing code!
// This helps prevent bugs and makes your code easy to explain to others.

// ===============================
// End of Notes
// ===============================
=======
let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


//"33" => 33
//"33abc" => NaN
// true ==> 1 , false ==> 0
//null => 0 
//undefined => NaN

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1 => true , 0 => false
//'' => false
//"hello"=> true


let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);



//*************************OPERATION *********************
let value = 3 
let negValue = -value
console.log(negValue)


// + - * ** / % these are basic math operation which are used in javascript 

let str1 = "hello"
let str2 = "mello"


let str3 = str1 + str2
console.log(str3);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); //1 never use this type of code 
console.log(+'');//0 never this types also 

let num1,num2,num3

num1 = num2 = num3 = 2+2

//dont write this type of code also yourcode must be readable


let gameCounter = 100;
++gameCounter;
console.log(gameCounter)

i++
++i
//both are different in ++i it is incremented and then value is given and in i++  value is given and then incremented you will understand more when doing loops




>>>>>>> 2e9e8314a9ce73b7206492c4d2485753cd0d6d51
