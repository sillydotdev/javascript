// block or local scope and global scope
let a = 100     // they are accessible in the whole program, hence known as global scope
const b = 200
// var c = 300

if(true) {
    let a = 900   // they are accessible in this if block only, hence known as block or local scope
    const b = 800
    // var c =700
    console.log(a);
}

console.log(a);
console.log(b);
// console.log(c);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++
//scope in functions
function one() {
    const username = "Kamran"
    function two() {
        const age = 22
        console.log(`The age of user ${username} is ${age}`);
    }
    // console.log(age);   // will give error as "age" scope is only within function "two"
    two()
}
one()

//Note: child function can use Parent function variables but vice-versa is not true


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//scope in conditional statements
if(true) {
    const username = "Kamran"
    if(username === "Kamran"){
        const wesite = " mkm.com"
        console.log(username + wesite);
    }
    // console.log(website);  // error because out of scope
}
// console.log(username);    // error because out of scope


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++HOISTING++++++++++++++++++++

console.log(addOne(5));
function addOne(num) {     // here you can access function anytime, before and after initialization
    return num + 1
}
// console.log(addOne(5));



// console.log(addTwo(5));       // here you cannot access function before initialiation
const addTwo = function(num) {   // We can declare function in this way as well. We can hold it in a variable
    return num + 2               // here it is usually called an Expression
}
console.log(addTwo(5));
