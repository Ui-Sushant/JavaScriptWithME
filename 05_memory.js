// two types of memory Stack memory and Heap memory

//stack are used in primitive data types and heap are used in non primitive data types


// 1. Primitive Data Types
// Type   	Example
// String	"hello"
// Number	10, 3.14
// Boolean	true, false
// undefined	let x; (no value)
// null	let x = null;
// Symbol	Symbol("id")
// BigInt	1234567890123n

// 2. Non-Primitive (Reference) Data Types
// Type	     Example
// Object	{ name: "John" }
// Array	[1, 2, 3]
// Function	function() {} or ()=>{}




let myYoutubeName = "Project-Me"
let anotherName = "LevelUpWithMe"
anotherName = "BrainStrom"

console.log(myYoutubeName); //"Project-Me"
console.log(anotherName); //"BrainStrom"

let userONe = {
    email:"user@google.com",
    upi:"suer@ybl"
}

let userTwo = userONe

userTwo.email = "me@gmail.com"

console.log(userONe.email);//same
console.log(usertwo.email);//same
