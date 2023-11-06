//Array methods

const marvel_heros = ["Ironman", "Captain America", "Thor"]
const dc_heros = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heros)  // push() adds the whole array as a single element into another array
// console.log(marvel_heros);
// console.log(marvel_heros[3]);  // 3rd element of marvel_heros is the whole dc_heros array now
// console.log(marvel_heros[3][1]);  

// concat() is used and is a better practice than push() to merge two arrays
const all_heros = marvel_heros.concat(dc_heros)  // concat() creates a new array and merges all the elements 
// console.log(all_heros);                          // of two arrays

// There is a better way to concat multiple arrays
// ... is called aspread operator
const all_new_heros = [...marvel_heros, ...dc_heros]  // The advantage with this way is that you can concatinate
// console.log(all_new_heros);                           // as many arrays as you want...


// few more interesting methods

// flat()
const another_array = [1, 2, 3, 4, [4, 5, 6], 6, [6, 7, 8]]
console.log(another_array);

const another_usable_array = another_array.flat(Infinity)
console.log(another_usable_array);

// isArray()
console.log(Array.isArray("Kamran"))
console.log(Array.from("Kamran"));
//console.log(Array.of("Kamran"));

let score1 = 100
let score2 = 200
let score3 = 300
const score = Array.of(score1, score2, score3)
console.log(score);

console.log(score.reverse());
