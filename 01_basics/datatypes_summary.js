//primitive (call by referance)
//7:- string,number,boolean,symbol,null,undefined,bigInt

//Primitive(By value)
//Array,Objects,Functions

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime based on the assigned value, rather than being explicitly declared or checked at compile time. 

//Declration of Symbol

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);

//Arrays :-
const Array=["akash","aniket","ajeet"]

//Objects:-
let myObj ={
    name:"akash",
    age:22 

}
//Functions
const myFunction =function(){
    console.log("Hello World");
}



/***************  MEMORY **************************/

// Stack(Primitive), Heap (Non Primitive)
let myYoutubeName = "hiteshchaudharydotcom"
let anotherName= myYoutubeName
anotherName= "chaiaurcode"

console.log(myYoutubeName) //gives : hiteshchaudharydotcom
console.log(anotherName); //gives : chaiaurcode

let userOne ={
    email:"user@google.com",
    upi: "userybl"
}

let userTwo= userOne
userTwo.email = "hitesh@google.com"

console.log(userOne.email) //gives hitesh@google.com
console.log(userTwo.email); //gives hitesh@google.com


