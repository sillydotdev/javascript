class User {
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, id) {
        super(username);
        this.email = email;
        this.id = id
    }
    addCourse() {
        console.log(`Adding a course: ${this.username}`);
    }
}

const userOne = new Teacher("Kamran", "kamran@gmail.com", 10)
userOne.addCourse();
userOne.logMe();

const userTwo = new User("Danish", "123456")
userTwo.logMe();

console.log(userOne instanceof User);