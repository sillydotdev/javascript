//const tinderUser = new Object()     // this is singleton
const tinderUser = {}                 // this is not singleton  

tinderUser.id = "123"
tinderUser.name = "Kamran"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "danish@gmail.com",
    userDetails:{
        fullname:{
            firstName: "Danish",
            lastName: "Malik"
        },
        city: "Srinagar"
    }
}
// console.log(regularUser);
// console.log(regularUser.userDetails);
// console.log(regularUser.userDetails.fullname);
// console.log(regularUser.person?.userDetails.fullname.firstName);  // ? defines check if the key is there

//merging objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)  // Object.assign(target, source)
const obj3 = {...obj1, ...obj2}   // ... means spread

// console.log(obj3);

// multiple objects in an array
const users = [
    {
        id: "1",
        email: "kam@gmail.com"
    },
    {
        id: "2",
        email: "dan@gmail.com"
    },
    {
        id: "3",
        email: "sam@gmail.com"
    }   
]
// console.log(users);
// console.log(users[2].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));  //returned in an array
console.log(Object.values(tinderUser));  //returned in an array
console.log(Object.entries(tinderUser)); //all entries returned as arrays within a single array
console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //whether the key is present in onject or not