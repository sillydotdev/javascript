// reduce in javascript

const numbers = [1, 2, 3, 4, 5]

// reduce using normal functions
// let initialValue = 0;
// const totalSum = numbers.reduce(function(accumalotor, currentValue){
//     console.log(`Accumalotor: ${accumalotor} and Current Value: ${currentValue}`);
//     return accumalotor + currentValue
// }, initialValue)

// const totalSum = numbers.reduce(function(accumalotor, currentValue){
//     return accumalotor + currentValue
// }, 0)


// reduce using arrow functions
const totalSum = numbers.reduce((accumalotor, currentValue) => (accumalotor + currentValue), 0)
// console.log(totalSum);


// Shopping cart example
const shoppingCart = [
    {
        courseName: "js course",
        price: 2999
    },
    {
        courseName: "python course",
        price: 1999
    },
    {
        courseName: "java course",
        price: 999
    },
    {
        courseName: "data science course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce((accumalator, items) => (accumalator + items.price), 0)
console.log(`Total price to pay: ${totalPrice}`);
