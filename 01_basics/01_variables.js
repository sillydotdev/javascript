/*
Variables in javascript
*/

const accountId = 145422
var accountEmail = "kamran@gmail.com"
let accountPassword = "855633"
accountCity = "Srinagar"  // writing with out variable type should not be preferred

let accountState;

//accountId = 6765678
console.log(accountId);

/*
var keyword is not preferred now,
because of issues with block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])