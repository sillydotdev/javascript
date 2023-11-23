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
}).then((username) => {       // username takes the date which is returned from the then() befor it...
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("Finally... promise is either resolved or rejected..."))

// const myPromise = promiseFour.then((user) => {  // This will not work. keep that in mind... We have to use async await then instead of then()
//     console.log(user);
//     return user.username;
// }).catch((error) => {
//     console.log(error);
// })

// console.log(myPromise);


// Promise 5
// using async await
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        // let error = false;
        if (!error) {
            resolve({ language: "JavaScript", extension: "js" })
        } else {
            reject('ERROR! Something is not right...');
        }
    }, 2000)
})

async function consumePromiseFive() {    // when you want the task to be done first and then concume the promise, we use async await...
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// Using fetch() -- using async awaitt
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()    // youb have to use await here as well as data is getting coverted to json fromat, so it takes time...
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()


// Using fetch() -- using then() thennable
fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((error) => console.log("E: ", error))


