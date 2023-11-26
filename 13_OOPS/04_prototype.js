let nameOne = "Kamran   ";
let nameTwo = "Danish     "

// console.log(nameOne.length);
// console.log(nameTwo.trim().length);  // trim cam be used to find the true length which means avoiding spaces at the last.

// But we want a way to define a fnction that can be implemented once and it will be applied to all the objects.

const heros = ["thor", "spiderman"]

const herosPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidyPower: function() {
        console.log(`Spidy power is: ${this.spiderman}`);
    }
}

Object.prototype.message = function() {              // Prototype at object level, every object can use it...
    console.log(`We need to save the world...`);
}

Array.prototype.messageTwo = function() {           // Prototype at Array level, only objects in Array hirarchy can use it...
    console.log(`The world is under threat...`);
}

// heros.message();             // will run
// herosPower.message();        // will run
// heros.messageTwo();          // will run
// herosPower.messageTwo();     // will not run


/**
 * Protypal Inheritance
 */
const User = {
    name: "Kamran",
    email: "kamran@google.com"
}

const Teacher = {
    makesVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TeachingAssistant = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport       // inheritance: accessing the properties of TeacherSupport. This is an older syntax
}

Teacher.__proto__ = User;         // Inheritance a well... This is also an older syntax

Object.setPrototypeOf(TeachingSupport, Teacher);   // Inheritance. This is a newer syntax of inheritance...


// Now we will be creating that "trueLength() property"
const nameThree = "AbuTurab   "
String.prototype.trueLength = function() {
    console.log(`"this" prints the value of current context which is: ${this}`);   // this here will print the value of current context.
    console.log(`The true length of the string is: ${this.trim().length}`);
}

nameThree.trueLength();
nameOne.trueLength();
nameTwo.trueLength();

"Zeeshan".trueLength();
