// for in loop 

// for in in objects
const myObject = {
    js: "javascript",
    py: "python",
    java: "JAVA",
    swift: "swift by Apple"
}
for (const i in myObject) {
    // console.log(i);      // prints the keys of the object
    // console.log(myObject[i]);      // prints the values of the object
    // console.log(`${i} is used for language ${myObject[i]}`);       
    // console.log(`${i}  =>  ${myObject[i]}`);
}


// for in in arrays
const arr = ["js", "java", "python", "swift"]
for (const i in arr) {
    // console.log(i);    // prints keys of an array. Keys of array start from 0, 1, 2,....
    // console.log(arr[i]);   // prints the values of the object
    console.log(`${i} => ${arr[i]}`);
}


// for in loop on map
const map1 = new Map()
map1.set('a', 1)
map1.set('b', 2)
map1.set('c', 3)
map1.set('d', 4)
// for (const key in map1) {      // it won't print anything as map is not iterable using For in
//     console.log(key);
// }