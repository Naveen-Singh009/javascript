const accountId = 23134421
let accountEmail = "naveen@gmail.com"
var accountPassword = "Naveen"

accountCity = "Dehradun"//not prefered way to declare

let accountState; //undefined 

//accountId = 123323//this is not allowed

accountEmail = "nav@gmail.com"
accountPassword = "111122"
accountCity = "Ghansali"

console.log(accountId);

/*
prefer not to use var
because of the issue of block scope and functional scope
*/

console.table([accountEmail, accountId,accountState, accountCity , accountPassword])