// Creating promises

// here we are hoding promise in a variable
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async function...");
        resolve();      // Calling resolve is necessary as it indicates that the promise has been consumed... without this the then() part will not be executed
    }, 2000)
});

promiseOne.then(function() {
    console.log("Promise consumed...");
})

// normally we create a promise without holding it in a variable
new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async function two...");
        resolve();
    }, 2000)
}).then(function() {
    console.log("Promise consumed...");
})


