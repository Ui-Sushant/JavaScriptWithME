const name = "Project Me"
const repoCount = 50

console.log(name + repoCount + "Value");//you can use but in the end it comes to readability so i prefer dont use that

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // use this too much easy and readable also


const gameName = new String('COC')

console.log(gameName[0]);//C
console.log(gameName.__proto__); //{} it is object which contains strings  method

// ✅ 1. length
let str1 = "JavaScript";
console.log(str1.length); // 10

// ✅ 2. toUpperCase() / toLowerCase()
let str2 = "hello";
console.log(str2.toUpperCase()); // "HELLO"
console.log(str2.toLowerCase()); // "hello"

// ✅ 3. charAt(index)
let str3 = "game";
console.log(str3.charAt(1)); // "a"

// ✅ 4. indexOf() / lastIndexOf()
let str4 = "banana";
console.log(str4.indexOf("a")); // 1
console.log(str4.lastIndexOf("a")); // 5

// ✅ 5. includes()
let str5 = "Hello world";
console.log(str5.includes("world")); // true

// ✅ 6. startsWith() / endsWith()
let str6 = "coding";
console.log(str6.startsWith("cod")); // true
console.log(str6.endsWith("ing"));   // true

// ✅ 7. slice(start, end)
let str7 = "JavaScript";
console.log(str7.slice(0, 4)); // "Java"

// ✅ 8. substring(start, end)
let str8 = "Hello";
console.log(str8.substring(1, 4)); // "ell"

// ✅ 9. substr(start, length) // deprecated but still works
let str9 = "Hello";
console.log(str9.substr(1, 3)); // "ell"

// ✅ 10. trim() / trimStart() / trimEnd()
let str10 = "   space   ";
console.log(str10.trim());      // "space"
console.log(str10.trimStart()); // "space   "
console.log(str10.trimEnd());   // "   space"

// ✅ 11. replace() / replaceAll()
let str11 = "I love JavaScript. JavaScript is awesome.";
console.log(str11.replace("JavaScript", "JS")); // "I love JS. JavaScript is awesome."
console.log(str11.replaceAll("JavaScript", "JS")); // "I love JS. JS is awesome."


// ✅ 12. split()
let str14 = "apple,banana,grape";
console.log(str14.split(",")); // ["apple", "banana", "grape"]

// ✅ 13. repeat()
let str15 = "ha";
console.log(str15.repeat(3)); // "hahaha"

// ✅ 14. match() — for regex pattern
let str17 = "My name is Sam";
console.log(str17.match(/Sam/)); // [ 'Sam', index: 11, ... ]


//lots of string methods you can go to mdn and search




