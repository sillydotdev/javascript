// Functions in javascript
// console.log("K");
// console.log("A");
// console.log("M");
// console.log("R");
// console.log("A");
// console.log("N");

function sayMyName() {
    console.log("K");
    console.log("A");
    console.log("M");
    console.log("R");
    console.log("A");
    console.log("N");
}

// sayMyName    // just writing sayMyName means reference of function
// sayMyName()     // writin with paranthesis sayMyName() means execute the function

function addition(num1, num2) {
    console.log(num1 + num2)
}

// addition(4, 6)
// const result = addition(2, 6)
// console.log("Result: ",result);


function multiplication(num1, num2) {
    // console.log(num1 + num2)
    // let result = num1 * num2
    // return result
    // console.log("My name is Kamran");  // No statement after the return statement will be executed

    return num1 * num2
}
const result = multiplication(8, 5)
// console.log("Result: ",result);
// console.log(multiplication(3,5));  // 2nd way


// ++++++++++++++++++++++++++++++
function isUserLoggedIn(username = "Sam") {
    // if(username === undefined) {
    //     console.log("Please enter the username...");
    //     return
    // }
    if(!username) {
        console.log("Please enter the username...");
        return
    }
    return `${username} just logged in`
}

console.log(isUserLoggedIn("Kamran"));
console.log(isUserLoggedIn(""));
console.log(isUserLoggedIn());