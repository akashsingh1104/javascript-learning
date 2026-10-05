//Singleton

const tinderUser =new Object() //singeton object
const tinderUser = {} //non singleton

tinderUser.id="123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser);//gives: { id: '123abc', name:'Sammy', isLoggedIn: false}

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        firstname: "hitesh",
        lastname: "chaudhary"
    }
}
console.log(regularUser.fullname);//gives {userfullname:{ firstname:'hitesh',lastname:'chaudhary}}

console.log(regularUser.fullname.firstname) //gives hitesh

//Combining objects
const obj1 ={1: "a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)

const obj4 = {...obj1,...obj2}
console.log(obj3)

//When values come from database then

const users = [
    {
        id: 1,
        email: "h@gmail.com",
    }
    
]
users[1].email //gives error because we have only one object in array and we are trying to access the second object which is not present so it gives error
console.log(tinderUser);

console.log(Object.keys(tinderUser)) //gives the keys of object in array format
console.log(Object.values(tinderUser)) //gives the values of object in array format
console.log(Object.entries(tinderUser)) //gives the key value pair of object in array format
console.log(tinderUser.hasOwnProperty("isLoggedIn")) //gives true if the key is present in object otherwise false



const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "hitesh",
}

const {courseInstructor} = course //destructuring of object
console.log(courseInstructor) //gives hitesh

