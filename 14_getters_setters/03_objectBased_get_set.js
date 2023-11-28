// getters and setters using objects
// without using classes and defineProperty()
const User = {
    _email: "shahid@google.com",
    _password: "1234xyz",

    get email() {
        return this._email;
    },

    set email(value) {
        this._email = value;
    },

    get password() {
        return this._password.toUpperCase();
    },

    set password(value) {
        this._password = value;
    },

}

const userOne = Object.create(User)   // you can create user as well...

console.log(User.email);
console.log(User.password);
