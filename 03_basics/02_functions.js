// passing multiple arguments in a function
function calculateCartPrice(num1) {
    return num1
}
// console.log(calculateCartPrice(200));   // this will work fine and returns 200
console.log("Cart A: ",calculateCartPrice(200, 300, 400));  // this returns only first value not the rest

// To resolve above problem we use spread or rest operator (...)
function calculateCartPrice1(...num1) {   // used ... here
    return num1
}
console.log("Cart B: ",calculateCartPrice1(200, 300, 400));   // returns these in an array

// one more example
function calculateCartPrice2(val1, val2, ...num1) {   // first 2 arguments will be saved in "val1 & val2"
    return num1                                       // rest will be saved in "num1"  
}
console.log("Cart C: ",calculateCartPrice2(200, 300, 400, 500));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing objects to a a function
const user = {
    username: "Kamran",
    age: "22"
}

function handleObject(anyObject) {
    console.log(`User's name is ${anyObject.username} and his age is ${anyObject.age}`);
}

handleObject(user)

// or you can directly pass object to a function. You don't have to create it separately
handleObject({
    username: "Danish",
    age: "21"
})


// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Passing array to a function
const myNewArray = [100, 200, 300, 400, 500]
function getArrayElement(getArray) {
    return getArray[2]
}

console.log(getArrayElement(myNewArray));
console.log(getArrayElement([900, 800, 700, 600]));  // directly passing array to a function