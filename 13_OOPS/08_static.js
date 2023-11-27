// static in javascript
class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is: ${this.username}`)
    }

    static createId() {
        return `123`;
    }
}

class Teacher extends User {
    constructor(username, email){
        super(username);
        this.email =email;
    }
}

const userOne = new Teacher("Kamran", "kamran@gmail.com");
userOne.logMe();

const userTwo = new Teacher("Danish", "danish@gmail.com");
userTwo.logMe();
// console.log(userTwo.createId());      // will not run as the "createId()" method is static and cannot be accessed by child class elements.