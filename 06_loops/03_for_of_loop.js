// "for of" loop in javascript

// for of on arrays
const arr = [1, 2, 3, 4, 5, 6]
for (const num of arr) {
    // console.log(num);
}


// for of on Strings
const greetings = "Hello World!"
for (const greet of greetings) {
    // console.log(greet);
}


// for of on Maps
const map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set('d', 4)

console.log(map1); 

for (const keys of map1) {
    console.log(keys);      // will print each key-value pair in separate arrays
}
for (const [i,j] of map1) {
    console.log(i, ':->', j);      // will print each key-value pair separately without in arrays
}


// for of on objects
const myObject = {
    game1: "Call of Duty",
    game2: "PUBG"
} 
// for (const [i, j] of myObject) {    // will show error "myObject" is nor iterable as objects 
//     console.log(i, j);              // can't be iterated like this... 
// }