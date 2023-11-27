const descroptor = Object.getOwnPropertyDescriptor(Math, 'PI');  // gives the description of a particular property of an object, in this case PI of obect Math
console.log(descroptor);
Math.PI = 5;
console.log(Math.PI);

const myObject = {
    name: "Kamran",
    id: 300,
    isLoggedIn: true,

    order: function() {
        console.log("Ordered...")
    }
}
 const descriptorOne = Object.getOwnPropertyDescriptor(myObject, "name");
 console.log(descriptorOne);
 console.log(myObject)
 Object.defineProperty(myObject, "name", {     // we can set properties of our own objects
    // writable: false,
    // enumerable: false            // if false you can not iterate through name as enumerable is false
    enumerable: true                // now you can iterate throught name.
 })

 const descriptorTwo = Object.getOwnPropertyDescriptor(myObject, "name");
 console.log(descriptorTwo);

 for (const [key, value] of Object.entries(myObject)) {      // Object.entries(myObject) used as objects are not iterable
    if(typeof value !== 'function') {               // if we dont use this condition, it will print object with whole function(key and value.)
        console.log(`${key}: ${value}`);
    }
    
 }
 



