//Two ways to declare object:-1.Literal  2. Constructor
//singleton : when made by constructor

/*********Object Literals*******/

const JsUser ={
    name: "hitesh",
    "full name" :"hitesh chaudhary"
    ,
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
//Accessing objects
console.log(JsUser.email)
console.log(JsUser[email]); //doesnt work
console.log(JsUser["email"]); //when we declare someting inside object it automatically think about the datatype of key name and since here key name was email which is string so to access it we need to use it in double quotes"" "

// console.log(JsUser.full name); //cant access it now by dot because we declared the key name full name as string
console.log(JsUser["full name"]) //correct way

//How to change value:
JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)//gives hitesh@chatgpt.com bcoz we freezed that value so cant change it

JsUser.greeting = function(){
    console.log("Hello JS User")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`) //this is used to access the properties of object
}
console.log(JsUser.greeting()) //gives Hello JS User
console.log(JsUser.greetingTwo())//gives: Hello JS User, Hitesh
