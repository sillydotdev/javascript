function setUsername(username) {
    this.username = username;               // 1. here the function will be called and executed and removed form the global execution context.
    console.log("This function is called...");
}

function createUser(username, email, age) {
    // setUsername(username);     // right now the username will not be printed as the setUsename() is already removed from th global ececution context as explained in point 1.
    // setUsername.call(username);   // .call is used to save the reference of the function. But it still won't print username as you have to actually inject  the value using this keyword  
    
    setUsername.call(this, username);   // now it will be executed, .call() takes 2 arguments : this and the parameter.
    this.email = email;
    this.age = age;
}

const userOne = new createUser("Kamran", "kamran@gmail.com", 22);
console.log(userOne);