<<<<<<< HEAD
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
=======
// //Singleton
// // Object.create this is called contructor method from ehich singleton is created (no ned to understand for now just remember for interviews)


// //objects Literals
// const mySym = Symbol("key1")

// const jsUser = {
//     name:"Hero",  //Keys:Value
//     "full Name":"HeroBrine",
//     //mySym:"mykey1" doesnt work as symbol so
//     [mySym]:"myKey1",
//     age:1000,
//     email:"hero@gmail.com",
//     isLogIN:false,
//     lastLogInDays:["Monday","Saturday"]
// }

// //to access objects
// console.log(jsUser.email);
// //console.log(jsUser.full Name); dont Work

// //console.log(jsUser[email]);//this wont work as keys are stored in the form of string behind the scene

// console.log(jsUser["email"]); 
// console.log(jsUser["full Name"]);//can even access this also
// console.log(jsUser[mySym]);//to access as symbol use this way other way it wont work

// //to overwrite the value
// jsUser.email="Herobrine@gmail.com"
// //Object.freeze(jsUser)//after doing this you cannot overwrite the object
// jsUser.email="HeroBrine@google.com"
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS users");
// }

// jsUser.greetingTwo = function(){
//     console.log(`Hello JS user,${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

//-------------------------------------------------------


// const tinderUSer = new Object()//singletone object
// const tinderUSer = {}//nonSingleton object asked in interview

//can do this way also
const tinderUSer = {}
tinderUSer.id = "123abc"
tinderUSer.name = "Sammy"
tinderUSer.isLoggedIn = false
// console.log(tinderUSer);

const regulaarUser = {
    email:"itachi@gmail.com",
    fullname:{
        userFullNaame:{
            firstName:"Itachi",
            lastName:"Uchiha"
        }
    }
}

// console.log(regulaarUser.fullname.userFullNaame.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}
//console.log(obj3);//same as array it gives a big object containing obj1 and obj 2 

//const obj3 = Object.assign({},obj1,obj2)//without parenthesis also work its optional but should use


const obj3 = {...obj1,...obj2}//mostly used 
console.log(obj3);

const users = [
    {
        id:1,
        email:"u@gmail.com"
    },
    {},
    {}
]
//in this way data comes in data base we will do in projects after some times

users[1].email
console.log(tinderUSer);

console.log(Object.keys(tinderUSer));//output in array and one of the most important topic
console.log(Object.values(tinderUSer));
console.log(Object.entries(tinderUSer));//less used gives array of key and value in th array

console.log(tinderUSer.hasOwnProperty('isLoggedIn'));//true

//--------------------------------------------------------
//Destructuring of object

const course ={
    courseName:'projectMe',
    price:'999999',
    courseInstructor:'WarLord'
}

// course.courseInstructor
const {courseInstructor : instructor} = course
// console.log(courseInstructor);
console.log(instructor);

//you can also destructure array but rarely used so we will do that in projects


// {
//     'name':"WarLord",
//     'coursename':"ProjectMe",
//     'price':"99999"
// } this is JSON in which API is found

//sometime API also found in Arrays
[
    {},
    {},
    {}
]
>>>>>>> 2e9e8314a9ce73b7206492c4d2485753cd0d6d51
