// let score = 33
// console.log(typeof score); //gives number
// console.log(typeof (score)); // gives number
/* Important Note :- always type datatype first letter in capital */

// Changing string to number
let marks ="akash"
let valueInNumber = Number(marks)
console.log(valueInNumber); //gives NaN

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// Notes :-while changing to number:-
//if string has number it wil change, "33"=> 33
//if string has characters gives NaN, "akash"=> NaN
// true => 1, false => 0


/*String to Boolean*/
let IsLoogedIn = "akash"
let booleanIsLoggedin = Boolean(IsLoogedIn)
//console.log(booleanIsLoggedin)
/*Notes :- 1. ""(empty string) => gives false
2. "xyz" => true   3. 1=> true 4. 0=> false */

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber); //gives 33+++


//****************** Operations  *********************/
let value = 3
let negValue = -value
// console.log(negValue);

/*console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3); */

let str1= "hello"
let str2= "akash"
let str3= str1+ str2
//console.log(str3);
//console.log("1" + 2);
//console.log(1 + "2");
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

console.log(+true) //gives 1 output
console.log(+""); //  gives 0 because empty string is false

let num1,num2,num3
num1=num2=num3= 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter);

