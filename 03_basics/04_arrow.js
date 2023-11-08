// this and arrow functions

const user = {
    username: "Kamran",
    age: "22",
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to my website...`);  // this gives the current context. refers to the variables of current block
        console.log(this);           // here this were print the current context i.e., key:values of object user 
    }
}

// user.welcomeMessage()
// user.username = "Danish"
// user.welcomeMessage()

// console.log(this);   // here this will print an empty object because there is no global context here in Node environment, here it will give empty object but if run rin it in browser it will give you a "window object"


//++++++++++++++++++ this keyword in function +++++++++++++++++++++++++
function one() {
    let username = "Kamran"
    // console.log(this);
    console.log(this.username);    // will print undefined
}
// one()

const two = function() {
    let username = "Kamran"
    console.log(this);              // will print some randon stuff
    // console.log(this.username);  // will print undefined
}
// two()

/** Note: We usually don't use this keyword in functions */


// +++++++++++++++++++++ ARROW function +++++++++++++++++++++++
const three = () => {
    let username = "Kamran"
    console.log(this);             // will print empty object
    console.log(this.username);    // will print undefined
}
// three() 

const add1 = (num1, num2) => {
    return num1 + num2          // explicit return in arrow functions: when you use return keyword
}
console.log("Basic arrow function:",add1(3, 4));


/**
 * implicit return: you do not write return keyword. You can use paranthesis() but not curly braces{}
 */
const add2 = (num1, num2) => num1 + num2   
console.log("Showing imlicit return:",add2(2, 4));

const add3 = (num1, num2) => (num1 + num2)    
console.log("Showing imlicit return:",add3(2, 4)); 

const add4 = (num1, num2) => {num1, num2}          // will show undefined because of use of {}
console.log("Showing imlicit return:",add4(5, 6));  

// print objects in arrow functions using implicit return
const myObjectFunction = () => {username: "Kamran"}    // will show undefined because of use of {}, here in objects we have to wrap {} inside paranthesis ()
console.log("Printing object using imlicit return in arrow function:",myObjectFunction()); 

const myObjectFunction1 = () => ({username: "Kamran"})    
console.log("Printing object using imlicit return in arrow function:",myObjectFunction1());  







