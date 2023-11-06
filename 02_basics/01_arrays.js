// Arrays in javascript

const myArray = [1, 2, 3, 4, 5]
// console.log(myArray);

const heroes = ["Iron man", "Batman", "Hawk Eye"]
const heroes1 = ['Iron man', 'Batman', 'Hawk Eye']
// console.log(heroes);
// console.log(heroes1);

const myArray2 = new Array(1, 2, 3, 4, 5)
// console.log(myArray2);

// console.log(`the element at index 2 is: ${myArray[2]}`);


//+++++++++++++++++++++++++++++++++++
//Array methods
const arr = [1, 2, 3, 4, 5, 6]
arr.push(7)  // push() adds element to array at the end
arr.push(8)

arr.pop()  // pop() removes the element from the end

arr.unshift(0)  // unshift() adds the element at the beginning of an array
arr.unshift(9)

arr.shift()   // shift() removes the element from the beginning of an array
// console.log(arr);

//+++++++++++++++++++++++++++++++
// join()
const arr1 = [1, 2, 3, 4, 5, 6]
//const arr2 = arr1.join()     // join() returns an string by concatenating all the elements of an array
//const arr2 = arr1.join('')   // separated by comma(,) or a specified separator(separator can be anything like -,_ or any letter) 
const arr2 = arr1.join('-')
// console.log(arr2);      


// slice, splice
// Inshort, slice() doesn't manipulate the original array while as splice() manipulates the original array...
const originalArray = [1, 2, 3, 4, 5, 6, 7]
console.log("A: ",originalArray);  // Array befor slice and splice

const arr4 = originalArray.slice(1,4)   // slice prints the elements in the given range without the element at last index
console.log(arr4);                      // slice doesn't affect the original array
console.log("B: ",originalArray)   // Array after slice

const arr5 = originalArray.splice(1,4)   // splice prints the elements in the given range including the element at last index
console.log(arr5);                       // splice removes the range elements from the original array as well
console.log("C: ",originalArray);   // Array after splice

