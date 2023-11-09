// for loops
for (let i = 0; i < 10; i++) {
    const element = i;
    // console.log(element);
}

// for (let i = 0; i < 10; i++) {
//     if(i == 5) {
//         console.log("5 is a number");
//     }
//     console.log(i);
// }

// nested for loops
for (let i = 0; i <= 5; i++) {
    // console.log(`outer loop ${i}`);
    // console.log(`Table of:${i}`);
    for (let j = 0; j <= 5; j++) {
        // console.log(`inner loop ${j} and outer loop ${i}`);    
        // console.log(i + '*' + j + '=' + i*j);
        // console.log(i + "*" + j + "=" + i*j);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
    
}

// looping arrays
const myArray = ["batman", "superman", "flash"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
}


// break and continue in loops
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Detected 5");
        break;    // loop will not print 5 and break there and will not print anything afterwards
    }
    console.log(`Number is ${i}`);    
}
for (let i = 0; i < 10; i++) {
    if(i == 5) {
        console.log("Detected 5");
        continue    // loop will not print 5 and print the rest afterwards
    }
    console.log(`Number is ${i}`);    
}

