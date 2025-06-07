const accountId = 1441
let accountEmail = "Sarthak2gmail.com"
var accoutPassword = "Whats up"


accountCity = "Peak" 
// Possible but dont use

let accountState;
// then it gives undefined

// accountId = 2234 Is Not Allowed
accountEmail = "Hello@gmail.com"
accoutPassword = "2234"
accountCity = "Purgatory"


console.log(accountId)
console.table([accountEmail,accountId,accountState,accoutPassword])

// We prefer not to use var because of issue in block scope
