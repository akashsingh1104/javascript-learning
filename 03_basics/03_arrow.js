const user ={
    username : "hitesh",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //we use this to refer current context
        console.log(this);//it gives all values of current context
    }
}


user.welcomeMessage() //gives: hitesh, welcome to website
//if we change username
user.name = "sam"
user.welcomeMessage()//gives: sam, welcome to website
//it happened because the value before was on current context not hardcore value so when we changed the context means changed the value

console.log(this);//gives {} means empty bcoz we are in node environment because there is no context in global


function chai(){
    console.log(this);//printing this in a function
    let username ="hitesh"
    console.log(this.username) //gives undefined, it means that this works in object but when we try to use it in function we cant
    
}
chai()



const chai = function(){
    let username ="hitesh"
    console.log(this.username)// it gives undefined also it means that if we declare function like this it will still give undefined
}
chai()




//Arrow Function
const addtwo = (num1,mum2) => {
    return num1 + num2
}
console.log(addtwo(3,4))

//implicit return: no need of return statement and curly braces
const addtwo = (num1,mum2) => (num1 + num2)

console.log(addtwo(3,4))

//Note: jab curly brace use krte h tab return use krte h
// jab nhi krte to usko paranthesis m likhte h


//if we return object in arrow function then
const addtwo = (num1,mum2) => ({username : "hitesh"})
console.log(addtwo(3,4))