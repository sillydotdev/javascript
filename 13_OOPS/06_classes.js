// class in javascript
class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return `${this.password}abc`;
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`;
    }
}

const userOne = new User("Kamran", "kamran@gmail.com", "123456");
console.log(`password: ${userOne.encryptPassword()}`);
console.log(`password: ${userOne.changeUsername()}`);



// Behind the scenes if the class didn't exist in javascript

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
 
// User.prototype.encryptPassword = function() {
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function() {
//     return `${this.username.toUpperCase()}`
// }

// const userTwo = new User("Danish", "danish@gmail.com", "123456");
// console.log(`password: ${userTwo.encryptPassword()}`);
// console.log(`password: ${userTwo.changeUsername()}`);