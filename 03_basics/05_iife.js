// Immediately Invoked Function Expressions (IIFE)

// Normal function
function myDatabase() {
    console.log(`DATABASE CONNECTION CREATED`);
}
myDatabase();

// IIFE
// function myDatabase() {
//     console.log(`DATABASE CONNECTION CREATED`);    // You have to wrap the whole function in parenthesis
// }()

(function myDatabaseConnection() {
    console.log(`DATABASE CONNECTION CREATED`);
})();


/*
 * Note: IIFE makes the function immediately and prevents the function fron the pollution of global variables etc. Also an important point to note is that you have to use semicolon(;) at the end of IIFE because IIFE does not know when to end the invokation. Otherwise rest of the code will not run and your program will show error...
 */

( (name) => {
    console.log(`DATA CONNECTION CREATED AGAIN ${name}`);
})("Kamran");
