document.getElementById(`title`)
//we can access an yelement by this way 

document.getElementById('title').setAttribute('class','test')//this overwrite if the calss was me then it will be test
document.getElementById('title').setAttribute('class','test headeing')

const title = document.getElementById(`title`)
title.style.backgroundColor = 'blue'
title.style.padding ="15px"
title.style.borderRadius ="15px"
//can style like this

// interesting 
//to take out contetn
title.textContent
title.innerText
title.innerHTML
//three ways are there and ther is some difference
//in innertext it will the the content that is visible to the user ie visible in the webpage but in innercontent we will get all the things even if they are hidedn by using display none property

//innerHTMl gives the html value also like it will show span and style also if there are asomeit supports html tags

//==================================QUERY SELECTOR======================================
document.querySelector('h1')
// it selects the first h1 
document.querySelector('.heading')//select by class
document.querySelector('#title')//select by id
document.querySelector('input[type="password"]')//select input also like this
//this is very easy to use

//if you have a list and have thre item and want to cahnge the color of the first item then 
const mUl = document.querySelector('ul')
const green = mUl.querySelector('li')
green.style.backgroundColor = 'green'
green.innerHTML = 'five'

//query selector gives only one value  to select all the items we use queryselectorall
const tempList = document.querySelectorAll('li')
tempList.style.color = 'green '
//it wont work cant do for all even if the item is only one in node list 
tempList[0].style.color = 'green '
//if we do this then the first li will be green
//if we console this we get node list which is not array remenber
//but we can use for each in this list as foreach is givenin the prototype of it
tempList.forEach(function(l){
    l.style.backgroundColor = 'green'
})//inthis way we can do it like change the color for all the li
//use for each cause ther is no map or other loopp


const tempClassList = document.getElementsByClassName('list-item')
//cant use for each here as there is no for each in its prototype as it gives html collection not aray collection
//in this case we can convert by
Array.from(tempClassList)
// now we can use all the method and looop used for aaray


//we can also do smtg like this
myH2.forEach(function (h) {
    h.style.color = 'black'
    h.style.backgroundColor = 'white'
    h.style.padding = '15px'
})

