let score = "33"
//let score = true
//let score = true
//let score = "33dd"


console.log(score);
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(valueInNumber);

// 33 => 33
// 33a => NaN (not a number)
// true => 1; false => 0
// null => 0



let isLoggedIn = 1

let isLoggedInBoolean = Boolean(isLoggedIn)
console.log(isLoggedInBoolean);

// 1 => true; 0 => false
// "" => false
// "any string" => true
// null => false
// undefined => false


let someNumber = 33
let someString = String(someNumber)
console.log(someString);
console.log(typeof(someString));
