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
// const obj3 = {...obj1, ...obj2}
// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)

console.log(obj3);