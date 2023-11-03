/*   **************************Stack and Heap memory**************************************   */

//In javascript, Primitive are stored in STACK
//Non-primitive/Reference are stored in HEAP

let myName = "Kamran"
let anotherName = myName

anotherName = "Danish"

console.log(myName);
console.log(anotherName);
// Notice above, the value of "myNName" didn't change because in Stack, 
// a copy of the data is made in memory and is given to "anotherName"


//++++++++++++++++++++++++++++++++++++++++++
// However in reference datatypes, the variables point to the same data in the heap.
// so if we change in one variable, the data changes in the other variable as well,
//because both point to same memory
let userOne = {
    email: "kamran@google.com",
    age: "22"
}

let userTwo = userOne
console.log(userOne);
console.log(userTwo);


userTwo.email = "danish@google.com"
console.log(userOne);
console.log(userTwo);