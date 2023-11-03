/*  *****************************DATATYPES in JavaScript***************************************  */

//Documentation link at the bottom


// There are broadly 2 types of datatypes in javascript

// 1. Primitive    2. Reference/Non-primitive


// Primitive
// Number, String, Boolean, null, undefined, symbol
// Examples are below
const score = 100
const myScore = 100.08
const isLogged = false
const temperature = null
let email;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id == anotherId);

const bigNumber =93634678836478367n


// Reference/Non-primitive
//Arrays, Objects, Functions
//Examples are below
const heroes = ["Iron man", "Spiderman", "Hawk Eye"];   //Array

let myObject = {           //Object
    name: "Kamran",
    age: 22
}

const myFunction = function(){      //Function
    console.log("Hello world");
}

// console.log(heroes);
// console.log(myObject);
// myFunction()

console.log(typeof bigNumber);
console.log(typeof anotherId);
console.log(typeof temperature);
console.log(typeof myScore);
console.log(typeof email);


//Non-premitive datatypes are objects... function is object function --> when you do "typeof" on them
console.log(typeof heroes);  
console.log(typeof myObject);
console.log(typeof myFunction);


// https://262.ecma-international.org/5.1/#sec-11.4.3

