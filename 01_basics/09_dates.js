// Dates in javascript

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023, 0, 12)
let myCreatedDate = new Date("12-05-2023")
// let myCreatedDate = new Date("2023-05-14")
// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toLocaleDateString());

let myTimeatamp = Date.now();
// console.log(myTimeatamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now() / 1000);      //convert into seconds
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);  // since month in Javascript starts with 0, so we use +1 so that the end user won't be confused
console.log(newDate.getFullYear());

console.log(`The date is: ${newDate.getDay()}/ ${newDate.getMonth() + 1}/ ${newDate.getFullYear()}`);

let anotherDate = new Date()

console.log(anotherDate.toLocaleString('default', {
    month: "long",
    day: 'numeric',
    weekday: "long"
}));