const accountId = 2437
let accountEmail = "akash@google.com"
var accountPassword = "12345"
accountCity = "Agra"
let accountState; //give undefined as output because no value is given

// accountId = 22  can't change const value again not allowed
console.log(accountId); //gives 2437
accountEmail = "akku@mail"
accountPassword = "9988"
accountCity = "ghaziabad"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) 

// prefer not to use var because of issue in block scope and functional scope


