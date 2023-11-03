//***************************NUMBERS & MATH******************************** */

// +++++++++++++++Numbers+++++++++++++++++++
const num1 = 100
// console.log(num1);

const num2 = new Number(100)
// console.log(num2);

// console.log(num2.toString().length);
// console.log(num2.toFixed(2));

const num3 = new Number(123.898)
// console.log(num3.toPrecision(3));
// console.log(num3.toPrecision(2));

const num4 = 1000000
// console.log(num4.toLocaleString());
// console.log(num4.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);


// ++++++++++++++++++++++  MATHS  ++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));  //  abs converts negative to positive, not vice-versa
// console.log(Math.abs(4));
// console.log(Math.round(4.2));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));  // ceil rounds off to upper limit
// console.log(Math.floor(4.9)); // floor rounds off to lower limit
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 3));
// console.log(Math.min(2, 3));
// console.log(Math.max(2, 3));

// random()  ==>> important
console.log(Math.random());  // prints any random value between 0 and 1
console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1); // +1 if the random value is 0.0
console.log(Math.floor(Math.random() * 10) + 1)
console.log(Math.ceil(Math.random() * 10) + 1)

//if you need values between suppose min and max variables
//remember this formulla (max - min + 1) + min as shown below
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);   

                            
