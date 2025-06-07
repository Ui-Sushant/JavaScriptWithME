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