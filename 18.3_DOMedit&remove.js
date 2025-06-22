//if there is ul having li 

function addLanguage(language) {
    const li =  document.createElement('li')
    li.innerHTML = `${language}`
    document.querySelector('.language').
    appendChild(li)
}

addLanguage("python")
addLanguage("Typescript")

//in this way it have to traverse the whole tree so in large project we do

function addOptiLanguage(language){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(language))
    document.querySelector('.language').appendChild(li)

}//optimized

addOptiLanguage('Java')//dont need to travesrse the whole tree
//what is traverse


//edit
const secondLang = document.querySelector('li:nth-child(2)')//how does it work?? nth child things
// secondLang.innerHTML = "Mojo" not sooptimized
const newLi = document.createElement('li')
newLi.textContent = 'MOjo'
secondLang.replaceWith(newLi)

 
//edit
const firstLang = document.querySelector('li:first-child')
firstLang.outerHTML = '<li>Typescript</li>' 

//remove
const lastLang = document.querySelector('li:last-chid')
lastLang.remove()
