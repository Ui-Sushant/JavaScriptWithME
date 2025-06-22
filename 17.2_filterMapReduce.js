const myNums =[1,2,3,4,5,6,7,8,9,10]

const newNums =  myNums.filter((num)=>{
    return num > 4//if scope is opened then must use return keyword 
})

console.log(newNums);
 

// const newNums2 = []
// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums2.push(num)
//     }
// });
// console.log(newNums2);//same but its long so filter

// books[{}]
// const userbooks = books.filter((bk)=>bk.genre === 'History')
// console.log(userbooks);
//similarly we can find books form publsh dates and etc and always remeber if you open a scope you must use return keyword

/////////////////////////////////////////MAP
const myNumbers2 = [1,2,3,4,5,6,7,8,9,10]
const newNumbs = myNumbers2.map((num)=>{
    return num * num
})
console.log(newNumbs);


const newNumbers = myNumbers2
.map((num)=>num*num)
.map((num)=>num+1)
.filter((num)=>num>=40)

console.log(newNumbers);



//REDUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUCCCCCCCCEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
const mNum = [1,2,3,4]


const myTotal = mNum.reduce((acc,curval)=>{
    console.log(`acc:${acc} and curval:${curval}`);
    return acc + curval
    
},0) //here 0 is the initial value of acumulator and curval taes the value of the aray element so 1 that means1st 1 + 0 is 1 then acc value becomes 1 then from array 2 comes then return 2 + 1 ie 3 then again acu value become 3 again 3 comes from array then becomes 3 + 3 ie 6 and so goes on

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js Course",
        price:999
    },
    {
        itemName : "python Course",
        price:899
    },
    {
        itemName : "CPP Course",
        price:949
    },
    {
        itemName : "JAva Course",
        price:1999
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(totalPrice);
