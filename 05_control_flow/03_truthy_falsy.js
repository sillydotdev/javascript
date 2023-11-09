 // truthy and falsy in javascript

const userEmail = "kamran@gmail.com"     // obviously will print if statement
// const userEmail = []                  // this also prints if statement -> truthy value
// const userEmail = ""                  // this prints else statement  -> falsy value
 if(userEmail) {
    console.log("Got the user email...");
 }
 else {
     console.log("Didn't get the email...");
 }


// Falsy:
// false, 0, -0, Bigint 0n, "", null, undefined, NaN

//Truthy
//"0", 'false', " ", [], {}, function(){}

 // best ways to check if array is empty
 const arr = []
 if(arr.length === 0) {
    console.log("Array is empty...");
 }

 // best ways to check if array is empty
 const myObject = {}
 if(Object.keys(myObject).length === 0) {       // Object.keys() returs an array of keys in an object
    console.log("Object is empty...");
 }


 // remember these
 console.log(false == 0);
 console.log(false == '');
 console.log(0 == '');


 // Nullish Coalescing Operator (??): null undefined

 let val;
//  val = 5 ?? 10
//  val = null ?? 15
//  val = undefined ?? 20
 val = null ?? 25 ?? 30

 console.log(val);


 // Ternary Operator
 const price = 100
 price <= 100 ? console.log("it is affordatble") : console.log("it is not affordable");