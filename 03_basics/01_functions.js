function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
sayMyName()


function addTwoNumbers(number1,number2) {
    console.log(number1+number2);
    
}
addTwoNumbers(3,4)
addTwoNumbers(3,"4") //gives 34
addTwoNumbers(3,"a") //gives 3a


function loginUserMessage(username){
    return `${username} just logged in`
}
loginUserMessage("hitesh") //value to return hui h lekin print nhi hui h

console.log(loginUserMessage("hitesh")); //gives:hitesh just logged in
console.log(loginUserMessage(""))//gives just logged in
console.log(loginUserMessage());//gives: undefined just logged in


function calculateCartPrice(...num1) //... is rest operator
{
    return num1
}
console.log(calculateCartPrice(200,400,500))

//how to pass object into function
const user ={
    username: "hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//calling function
handleObject(user) //gives: Username is hitesh and price is 199

//we can also pass object directly into function without creating any variable
handleObject({
    username: "hitesh",
    price: 199
}) //gives: Username is hitesh and price is 199

//can also pass array into function
const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) //gives 400
console.log(returnSecondValue([200,400,100,600])) //gives 400