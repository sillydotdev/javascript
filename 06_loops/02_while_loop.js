// while and do-while loop in kavascript
let index = 0
while (index <= 10) {
    console.log(`${index}`)
    index = index + 2
}

// while loo on arrays
const myArray = ["Kamran", "Danish", "Owais"]
let i = 0
while (i < myArray.length) {
    console.log(`The names are: ${myArray}`);
    i = i +  1;
}


// do-while loop
let j = 1
do {
    console.log(`${j}`);
    j = j + 1
} while (j <= 10);

//anothe case for do-while
let k = 11
do {
    console.log(`The number is: ${k}`);
    k = k + 1
} while (k <= 10);   // here only k = 11 will be printed