const credit = 500

const balance = new Number(200)
console.log(balance)
console.log(credit);

console.log(balance.toString().length);
console.log(balance.toFixed(2));


const otherNumber = 23.8996
console.log(otherNumber.toPrecision(3)); // gives 23.9

const hundreds = 100000
console.log(hundreds.toLocaleString('en-In'));


//--------------------MATHS-------------------------
//math library comes in JS by default 

console.log(Math.abs(-4));//Absolute value
console.log(Math.round(4.6));//gives 5
console.log(Math.floor(4.9));//gives 4
console.log(Math.max(4,5,3,6,8));
console.log(Math.min(4,3,6,8,9));


console.log(Math.random());// gives random value between 0 and 1
//in it vaue can be even 0 so to avoid getting 0 we do 
console.log(Math.floor(Math.random()*10)+1);// doing this we get random number between 1 to 10 not  0


const min = 10 
const max = 20

console.log(Math.floor(Math.random() * (max - min)) + min);











