// getters and setters without class-based syntaxx
// using defineProperty()

function User(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email;
        },
        set: function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password.toUpperCase()}abcdef`;
        },
        set: function(value) {
            this._password = value;
        }
    })
}

const userOne = new User("owais@google.com", '1234xyz')
console.log(userOne.email);
console.log(userOne.password);



