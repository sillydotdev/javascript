// block or local scope and global scope
let a = 100     // they are accessible in the whole program, hence known as global scope
const b = 200
// var c = 300

if(true) {
    let a = 900   // they are accessible in this if block only, hence known as block or local scope
    const b = 800
    // var c =700
    console.log(a);
}

console.log(a);
console.log(b);
// console.log(c);