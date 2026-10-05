//Arrays

const myArr = [0,1,2,3,4,5]
console.log(myArr[0]) //gives 0

const Arr = new Array(1,2,3,4)

//Array methods

myArr.push(6) // add 6 in the array
console.log(myArr)
myArr.pop() //remove the last element

myArr.unshift(9) //inserts 9 at the starting
myArr.shift() // removes the firste

console.log(myArr.includes(9)) // gives true if 9 exists in array
console.log(myArr.indexOf(3))

const newArr = myArr.join() // gives value of myArr but the type is changed to string

//SLICE AND SPLICE
console.log("A", myArr); //A [0,1,2,3,4,5]
const myn1 = myArr.slice(1,3) //removes index 1 and 2 
console.log(myn1) //[1,2]
console.log("B", myArr) // B [0,1,2,3,4,5]

const myn2 =myArr.splice(1,3) //it includes index 3 also
console.log("C",myArr) // C [0,4,5] so the main difference between slice and splice is that splice changes the original array while slice doesnt

console.log(myn2) //[1,2,3]


/*********NOTE : read more methods in console of browser */



