// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 >= 1);
// console.log(2 <= 1);
// console.log(2 == 1);

// console.log("2" > 1);
// console.log("02" > 1);


console.log(null > 0);
console.log(null >= 0);
console.log(null == 0);
// This is because equity check (==) works differently than comparisons (>, <, <=, >=) in javascript...
//comparisons convert "null" to Number and Equity doesn't...

console.log("2" == 2);
console.log("2" === 2)  //this is strict check....