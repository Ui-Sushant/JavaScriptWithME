<<<<<<< HEAD
// ============================================================
// 📦 JavaScript Arrays — Basics & Methods
// ============================================================

// ✅ 1. Declaring Arrays
const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Ironman", "Spiderman", "Thor", "Doctor Strange"];
const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

console.log(myArr[0]);  // 0 — index starts from 0
console.log(myArr2);

// ✅ 2. Common Array Methods
myArr.push(6);       // Adds 6 at end
myArr.pop();         // Removes last element
myArr.unshift(9);    // Adds 9 at the beginning (⚠️ not efficient)
myArr.shift();       // Removes first element

console.log(myArr.includes(9));   // false (checks if value exists)
console.log(myArr.indexOf(3));    // 2 (returns -1 if not found)

// ✅ 3. `join()` — Converts array to string
const joined = myArr.join("-");
console.log(joined); // "0-1-2-3-4-5"
console.log(typeof joined); // string

// ============================================================
// ✂️ Slice vs Splice
// ============================================================

console.log("Original Array:", myArr);

// 🔹 slice(start, end) → doesn't modify original
const sliceArr = myArr.slice(1, 3); // Gets elements from index 1 to 2
console.log("Sliced:", sliceArr);
console.log("After Slice:", myArr); // Unchanged

// 🔹 splice(start, deleteCount) → modifies original
const spliceArr = myArr.splice(1, 3); // Removes 3 elements starting at index 1
console.log("Spliced:", spliceArr);
console.log("After Splice:", myArr); // Original is changed

/* 
Summary:
Method      | Modifies Original? | Returns
------------|--------------------|--------------------
slice()     | ❌ No               | A copy
splice()    | ✅ Yes              | Removed elements
*/


// ============================================================
// 🦸‍♂️ Combining Arrays
// ============================================================

const marvel = ["Ironman", "Spiderman", "Thor"];
const dc = ["Superman", "Batman", "Flash"];

marvel.push(dc);
console.log(marvel);       // ["Ironman", "Spiderman", "Thor", ["Superman", "Batman", "Flash"]]
console.log(marvel[3][1]); // "Batman" — accessing nested array (not preferred)

// 🔹 concat() → merges & returns new array
const allHeroes = marvel.concat(dc);
console.log(allHeroes); // flat array

// 🔹 spread (...) — modern way to merge
const allNewHeroes = [...marvel, ...dc];
console.log(allNewHeroes); // cleaner and widely used

// 🔹 flat() — flattens nested arrays
const nested = [1, 2, 3, [4, 5], [6, 7, [8, 9]]];
const flatArr = nested.flat(Infinity);
console.log(flatArr); // Flattens all levels


// ============================================================
// 🧪 Array Type Check + Conversion
// ============================================================

console.log(Array.isArray("Ironman"));     // false
console.log(Array.from("Ironman"));        // Converts string to array

// Special case:
console.log(Array.from({ name: "Ironman" })); 
// ❌ [] — need to specify key or value extractor → asked in interviews!

// Convert variables to array
let score = 100, score1 = 200, score2 = 300;
console.log(Array.of(score, score1, score2)); // [100, 200, 300]

// ============================================================
// 🧠 Quick Recap for Interviews
// ============================================================

/*
🔸 Arrays are non-primitive and stored in heap memory.
🔸 Common operations: push, pop, shift, unshift, join, slice, splice
🔸 Check: Array.isArray() → true/false
🔸 Convert: Array.from(), Array.of()
🔸 Merge: concat(), spread (...)
🔸 Flatten: flat(depth)
🔸 Interview Trap: Array.from({}) returns [] unless mapped
*/

// 🔗 MDN Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

=======
//Arrays

// const myArr = [ 0,1,2,3,4,5]
// const myHeros = ["Ironman", "SpiderMan","Thor","DOctor Strange"]
// const myArr2 = new Array(1,2,3,4,5,6,7,8,9)

// console.log(myArr[0]);//0 index start from 0
// console.log(myArr2);

//this is all the basics of array.


//-------------Methods of arrays---------------------

// myArr.push(6) add element to the last of array 
// myArr.pop() // removes the last element of array
// myArr.unshift(9) // add the element to the first (not used)
// myArr.shift()// same like pop but removes the first element

// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(3));//gives the index if element is present but if it is absent there then gives the index -1


//if 
// const newArr = myArr.join()
//is done then the newArr`s type will be string 
// console.log(myArr);


//slice and splice
// console.log("A",myArr);//OG array
// const myArr1 = myArr.slice(1,3)//Og array is sliced,range is not taken upto 3 its upto 2

// console.log(myArr1);//sliced OG array ie 1 2
// console.log("B",myArr);//New array which is same as OG ntg is changed

// const myArr2 = myArr.splice(1,3)//OG array is spliced
// console.log(myArr2);//Spliced OG array ie 1 2 3  
// console.log("C",myArr);//New array of OG that means Og is changed now splice changed the OG array and now our OG array is [0,4,5] as 1 2 3  are spliced from the OG array as shown above

//In short splice can manipulate the OG array data but slice cant do it.


// 🔁 Summary 
// Method	    Does it modify the original array?	  Returns	Example Result
// slice()	    ❌ No	Shallow copy	             [1, 2] from [0,1,2,3]
// splice()	    ✅ Yes	Removed items	             [1, 2, 3] removed from [0,1,2,3,4,5]


//------------------More on array_--------------------
const marvelHeros = ["IronMan","Spiderman","THor","Hulk"]
const dcHeros =["SuperMan","BatMan","Flash"]

marvelHeros.push(dcHeros)//it adds dcHeros array as an item in marvelHeros it doesnt merge the array

// console.log(marvelHeros);
// console.log(marvelHeros[4][1]);//Gives Batman this is how we access array within the array but not recomended to do this type of thing 

// const allHeros = marvelHeros.concat(dcHeros)
// console.log(allHeros);//concat always gives new array not like push and the new array it gives will be merged not array within the array


const allNewHeros = [...marvelHeros,...dcHeros]//spreadOperator!!!!
console.log(allNewHeros);// best way to merge the array mostly used and easy to use


const  anotheArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]//rare case

const useableAnotherArr = anotheArr.flat(Infinity)//in plcae of infinity you should give the actual depth of array but you can even give infinity 
console.log(useableAnotherArr);




console.log(Array.isArray('IronMan')); //false
//To convert
console.log(Array.from('IronMan'));//['I', 'r', 'o','n', 'M', 'a','n']

console.log(Array.from({name:"Ironman"}));//it gives [] empty yoou must specify whether to make array of keys or values asked in interview


let score = 100
let score1 = 200
let score2 = 300

console.log(Array.of(score,score1,score2));

>>>>>>> 2e9e8314a9ce73b7206492c4d2485753cd0d6d51
