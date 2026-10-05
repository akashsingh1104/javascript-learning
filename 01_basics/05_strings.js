const name = "hitesh"
const repoCount = 50;
//concatenation
console.log(name + repoCount + "Value"); //old style less use//

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is new style use ``  and variable in ${}

const gameName = new String('hiteshhc') //this is object type
console.log(gameName); //it gives String {"hiteshhc"} because it is object type
console.log(gameName[0]); //it gives the character at index 0
// console.log(gameName__proto__); //it gives the prototype of the object

console.log(gameName.length); //it gives the length of the string
console.log(gameName.toUpperCase()); //it gives the string in uppercase
console.log(gameName.charAt(0)); //it gives the character at index 0


const newString = gameName.substring(0,5) //it gives the substring from index 0 to 5
console.log(newString); //it gives the substring from index 0 to 5

const newString2 = gameName.slice(0,5) //it gives the substring from index 0 to 5 , it can also take negative index


const newStringOne = "   hitesh   "
console.log(newStringOne); //it gives the string with leading and trailing spaces

console.log(newStringOne.trim()); //it gives the string with leading and trailing spaces removed

const url = "https://hitesh.%20com"

console.log(url.replace("%20","-")); //it gives the string with %20 replaced with -

console.log(url.includes("hitesh")); //it gives true if the string includes "hitesh" otherwise false

console.log(gameName.split("-")); //it gives the string split into an array of characters
