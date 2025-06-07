// > >= < <= == != we all know  these type of comparison you can try yourself easily 

// strict check ===
//=== checks datatypes also


///////////////////////////////////////////////////////////


console.log("2" > 1);
// it gives true but always make sure when you compare two data must be of same type 

console.log(null>0); //false 
console.log(null==0); //false      
console.log(null>=0); //true

//the reason is that an equality check == and comparison > >= < <= work differently 
// Comparison convert null to number,treating it as 0.
//thats why (3) null>=0 is true and (1) null > 0 is false

// for undefined all is false


// just avoid these type of comparison just remember these exists focus onbasic comparison and strict operation