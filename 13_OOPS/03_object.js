function multiplyBy5(num) {
    return num * 5;
}

multiplyBy5.power = 2;
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`The score is: ${this.score}`);
}

// const userOne = createUser("Kamran", 99);   // This won't work, you have to use new keyword to create a new instance as shown below
// const userTwo = createUser("Danish", 95);
const userOne = new createUser("Kamran", 99);
const userTwo = new createUser("Danish", 95);

userOne.printMe();
userTwo.printMe();