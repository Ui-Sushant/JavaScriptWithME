// // for of
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);   
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// const map = new Map()
// map.set('In',"india")
// map.set('USA',"United State of America")
// map.set('Fr',"France")
// map.set('Fr',"France")//no two entries
//  console.log(map);

//  for (const [key,value] of map) {
//     console.log(key,":-",value);
    
//  }

//  const myObject ={
//     "game":"NFS",
//     "game2":"AssainCreed"
//  }

// //  for (const [key,value] of myObject) {
// //      console.log(key,":-",value);
    
// //  }dont work for obj if we use for of
 

// const myobj1 = {
//     js:'javascript',
//     cpp:'C++',
//     rb:"rubby",
//     swift:"swift by apple"
// }
// //for in
// for (const key in myobj1) {
//     //returns key 
//     console.log(`${key} shortcut is for ${myobj1[key]}`);  
// }

// const programing = ['js','rb','py','java']
// for (const key in programing) {
//   //console.log(key);//array also have key i.e it satrats from 0 i.e index is key for array sp
//   console.log(programing[key]); 
// }

//we can t use for in in map


//__________________________FOR EACH
const coding = ['js','rb','py','java']
//if we see prototype of array there are map and for each by default loop it is high order
// coding.forEach(function (item){//it takes callback function no name 
//     console.log(item);
    
// })

// coding.forEach((item)=>{
//     console.log(item);
    
// })//same as above

// function printME(item){
//     console.log(item);   
// }

// coding.forEach(printME)//give refrence here dont execute by giving ()

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })


// const myCoding = [
//     {
//         languageName:"javascript",
//         languageFileName:'js'
//     },
//     {
//         languageName:"python",
//         languageFileName:'py'
//     },
//     {
//         languageName:"java",
//         languageFileName:'java'
//     },    
// ]//most use case

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
    
// })

// const coding1= ['js','rb','py','java']
// const value = coding.forEach((item)=>{
//     console.log(item);
//     return item
    
// })

// console.log(value); //undefined




