// Objects in javascript
// There are two ways to create objects in javascript:
// 1 - using constructor (Singleton)
// 2 - using literals

// Singleton
// using constructor
// Object.create         // will study this later

// using literals

const mySymbol = Symbol("key1")

const jsUser = {
    name: "Kamran",
    "full name": "Malik Kamran",
    [mySymbol]: "key2",       // symbol as a key has to be declare in brackets
    age: 22,
    email: "kamran@google.com",
    city: "Srinagar",
    isLoggedIn: false,
    lastLogInDays: ["Monday", "Tuesday"]
}

// console.log(jsUser.email);      // normally we can access the objects like this, but it is not a good practice
                                // because of thr following example...
//console.log(jsUser.full name); // here we can not access the full name like this..
                                 // keys are strings by default in Javascript

// better way to access objects is given below:
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);

// console.log(jsUser[mySymbol]);   // to access symbol key from object, we don't use "" marks
// console.log(typeof jsUser["mySymbol"]);
// console.log(typeof mySymbol);

// change thge value of objects
jsUser.email = "kamran@microsoft.com"
// console.log(jsUser);
//Object.freeze(jsUser)  // freezes the object. Now we can't make changes in the object

jsUser.email = "kamran@chatgpt.com"
// console.log(jsUser);

// functions in objects
jsUser.greeting = function() {
    console.log("Hello JS User");
}

jsUser.greeting();

jsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this["full name"]}`);
    console.log(`Hello JS User, ${this.name}`);
}
jsUser.greetingTwo();
