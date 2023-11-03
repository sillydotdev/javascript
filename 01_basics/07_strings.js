//**************STRINGS************** */
// Link to the documentation is at the bottom of this file

let name = "kamran"
let age = 22

console.log(name + age + "malik");   // this is old way... should not be preferred

// String interpolation is used... below is the example
console.log(`My name is ${name} and my age is ${age}`)

const myName = new String("Malik Kamran")
console.log(myName);
console.log(myName[0]);
console.log(myName.__proto__);
console.log(myName.length);
console.log(myName.toUpperCase());  // original value is not changed... please check the memory section for description
console.log(myName);

console.log("Character at 6 index is: ",myName.charAt(6));
console.log("K is at the index: ",myName.indexOf('K'));

// substring()
const stringOne = "KamranMalik"
console.log(stringOne.substring(0, 4));

// slice
const stringTwo = "KamranMalik"
console.log(stringTwo.slice(0, 4));
console.log(stringTwo.slice(-8, 6));    // in slice you can give negative as well

// trim()  ==> it trims the spaces in the string at the start and the end... doesn't trim in the middle
const stringA = "   Malik Kamran   "
console.log(stringA);
console.log(stringA.trim());
console.log(stringA.trimStart()); // trims only the spaces at the start
console.log(stringA.trimEnd());  // trims only the spaces at the end

// replace()
const url = "https://mkm.com/malik%20kamran"
console.log(url.replace('%20', '-'));

// includes()
console.log(url.includes('mkm'));
console.log(url.includes('danish'));

// split()  ==>  converts string to array
const name1 = "Malik-Kamran-Mushtaq"
console.log(name1.split('-'));

const word = name1.split('a')
console.log(word[3]);  // will return only the 3rd element after conversion to array using split
console.log(name1.split('a')[3]);  // can be written like this also


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
