const user = {
    username: "Kamran",
    isLoggedIn: true,
    age: 22,

    getAllUserDetails(){
        console.log("Got all the details from the database...");
        console.log(`Username: ${this.username}`);
        console.log(this);   // prints the current context, which is the details of the object user
    }
}

console.log(user.username);
console.log(user.getAllUserDetails());
console.log(this);   // global context which is empty object at the moment, but if you run it in browser, it will return a window object