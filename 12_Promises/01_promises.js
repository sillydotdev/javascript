// Creating promises

// here we are hoding promise in a variable
// Promise 1
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async function...");
        resolve();      // Calling resolve is necessary as it indicates that the promise has been consumed... without this the then() part will not be executed
    }, 2000)
});

promiseOne.then(function () {
    console.log("Promise consumed...");
})

// normally we create a promise without holding it in a variable
// Promise 2
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async function two...");
        resolve();
    }, 2000)
}).then(function () {
    console.log("Promise consumed...");
})

// Promise 3
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Kamran", email: "mkm@gmail.com" })
    }, 2000)
})
promiseThree.then((user) => {
    console.log(user);
})

// Promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        // let error = false;
        let error = true;
        if (!error) {
            resolve({ firstName: "Malik", lastName: "Kamran" });  // Passing thew  data in the resolve and retrieving it using thn() below
        } else {
            reject("ERROR! Something is wrong...")
        }
    }, 2000);
})
promiseFour.then((user) => {
    console.log(user);
    return user.firstName;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Finally... promise is either resolved or rejected..."))




