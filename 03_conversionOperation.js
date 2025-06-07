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




