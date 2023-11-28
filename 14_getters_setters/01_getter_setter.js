class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {               // getter always return the value what you want to renturn to the user. You can manipulate it so user sees manipulated data to protect it.
        return this._email;     
    }

    set email(value) {          // setter always sets the original value you want to set...
        this._email = value;    
    }

    get password() {                                    // getter always return the value what you want to renturn to the user. You can manipulate it so user sees manipulated data to protect it.
        return `${this._password.toUpperCase()}abcdef`; // like here we used to convert original password to upper case and add an extra string to it so that user can't get the original password.
    }

    set password(value) {           // setter always sets the original value you want to set...
        this._password = value;
    }
}

const userOne = new User("kamran@google.com", "12345")
console.log(userOne.email);
console.log(userOne.password);

const userTwo = new User("danish@google.com", "abcdef")
console.log(userTwo.email);
console.log(userTwo.password);