//if  there  is parent div having 4 child diva called day
const parent = document.querySelector('.parennt')
//if we log here parent then we will get all the access to those 4 children 
// if we did parent.children thenwe get html collection of 4 days not array
//to access
console.log(parent.children[1].innerHTMl);

//here but foreach works so

for (let i = 0; i < parent.children.length; i++) {
    console.log(parent.children[i].innerHTMl);   
}

parent.children[1].style.color = 'prange'


//Inteeresting 
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


//to move from child to parent
const day1 = document.querySelector('.day')
console.log(day1.parentElement);
console.log(day1.nextElementSibling);
//we can do further query selector but it is like treversing the dom so yeah

console.log(parent.childNodes);
// gives a complex nodes structure web is not optimizedd it does a lot of work in the background
//it notices br comment linebreak evrything



//to create 
const div = document.createElement('div')
//while log it will show div
div.className = 'main'
div.id = Math.random() * 10 + 1
div.setAttribute('title','generatedTitle')//doesnt overwrite,it doesnot take from there just ad ther
div.style.backgroundColor = "green"
// div.innerText = "ProjectME"//overwrites the value,it take from there and overwrte
const addText = document.createTextNode('ProjectMe')//doesnt overwirte create your own
div.appendChild(addText)
// it is done but it is not showing in the page so
document.body.appendChild(div)




