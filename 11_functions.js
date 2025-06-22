// ✅ FUNCTION BASICS in JavaScript

// 1. Function Declaration
// Parameters are placeholders. Arguments are actual values passed.
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
console.log("Result:", result); // Output: 8

// ❗️If you don't use return, the function will return 'undefined'
function noReturnFunc(a, b) {
  const sum = a + b;
  // No return here
}
console.log(noReturnFunc(2, 3)); // Output: undefined

// 2. Default Parameters
function loginUserMessage(username = "Guest") {
  return `${username} just logged in.`;
}
console.log(loginUserMessage("Warlord")); // Output: Warlord just logged in
console.log(loginUserMessage());           // Output: Guest just logged in

// 3. Handling Excess Arguments (Rest Operator)
function calculateCartPrice(...prices) {
  // prices is an array of all arguments
  return prices;
}
console.log(calculateCartPrice(200, 400, 100)); // Output: [200, 400, 100]

// 4. Passing Objects to Functions
const user = {
  username: "Warlord",
  price: 1999
};

function handleObject(anyObject) {
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);

// You can also pass the object directly
handleObject({ username: "Luffy", price: 3000 });

// 5. Passing Arrays to Functions
const myArr = [200, 400, 500, 300];
function returnSecondValue(arr) {
  return arr[1];
}
console.log(returnSecondValue(myArr)); // Output: 400

// You can also pass the array directly
console.log(returnSecondValue([100, 200, 300])); // Output: 200

