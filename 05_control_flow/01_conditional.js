// Conditional statements in javascript

// const num = 400

// if(num == "400") {   // loose checking... no typed checking
//     console.log("correct statement...");
// }
// if(num === "400") {  // strict equity check... typed checking
//     console.log("correct statement...");
// }
// console.log("after the conditional");


/*
 * operators usually used in conditional statements:
 * <, >, <=, >=, ==, !=, ===, !==, true, falsde
*/

// const score = "900"
// if(score !== 900) {
//     console.log("score is 900");
// }

// console.log("after strict check");
// if(score != 900) {
//     console.log("score is 900");
// }


// if-else
// const temperature = 29
// if(temperature >= 30) {
//     console.log("We can go out and play football");
// }
// else{
//     console.log("We can't play football");
// }

// we can write conditional statements without curly braces, 
// but it is noat a good practice and is inot recommended
// const balance = 1000
// if(balance >500) console.log("balance is good");    // not recommended


// multiple if-else
// const num = 1000
// if(num < 500) {
//     console.log("number is less than 500");
// }
// else if(num > 500 && num <750) {
//     console.log("number is between 500 and 750");
// }
// else if(num > 750 && num <=999) {
//     console.log("number is between 750 and 999");
// }
// else {
//     console.log("Number is greater or equal to 1000");
// }


// logical operatorsin conditional statements
const isLoggedIn = true
// const hascredit = false
const hascredit = true
if(isLoggedIn && hascredit) {
    console.log("User is a member");
}

const num = 100
// const num2 = 200
const num2 = 500
if(num == 100 || num2 ==200) {
    console.log("They are equal");
}






