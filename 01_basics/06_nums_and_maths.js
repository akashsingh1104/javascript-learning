const balance = new Number(100);
console.log(balance); //gives [Number: 100]

console.log(balance.toString()); //gives "100"
console.log(balance.toFixed(2)); //gives "100.00"


const otherNumber = 123.456789
console.log(otherNumber.toPrecision(4)); //gives "123.5"

const hundreds = 100000
console.log(hundreds.toLocaleString("en-IN")); //gives "1,00,000" in Indian format

/*************************MATHS ***********************/
console.log(Math); //gives the Math object
console.log(Math.abs(-5)); //gives 5
console.log(Math.round(4.6)); //gives 5
console.log(Math.ceil(4.2)); //gives 5
console.log(Math.floor(4.8)); //gives 4
console.log(Math.min(4, 5, 6)); //gives 4
console.log(Math.max(4, 5, 6)); //gives 6

console.log(Math.random()); //gives a random number between 0 and 1

console.log(Math.random() * 10); //gives a random number between 0 and 10

console.log(Math.floor(Math.random() * 10) + 1); //gives a random integer between 1 and 10

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //gives a random integer between 10 and 20


