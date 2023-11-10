// maps and chaining in javascript

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const myNumbers = numbers.map( (nums) => nums + 10 )
// console.log(myNumbers);

// Chaining in javascript = we can use multiple maps or filters..
const myNumbers = numbers
                    .map((nums) => nums * 10)
                    .map((nums) => nums + 2)
                    .filter((nums) => nums >= 47)

// const myNumbers = numbers.filter((nums) => (nums + 10))  // will not work, filter is only for true or false
console.log(myNumbers);