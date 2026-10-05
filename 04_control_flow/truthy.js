const userEmail = "h@hitesh.ai"

if(userEmail){
    console.log("Got user email");//this wiill work
}
else{
    console.log("dont have user email");
    
}
//Note: if in const userEmail there will be empty string "" then else statement will work but if it have empty array then if statement will work


//falsy values:
// 1.false
// 2. 0
// 3.-0
// 4.BigInt
// 5.""
// 6.null
// 7.undefined
// 8.NaN

//Truthy values:
/* 1. zero in string "0"
2. 'false'
3." "
4.[]
5.{}empty object
6. function(){}
*/

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}



//Nullish Coalescing Operator (??): null undefined
let val1;
val1 = 5 ?? 10// gives 5
val1 = null ?? 10//gives 10
val1 = undefined ?? 15 //give 15


//Terniary Operator
//condtion ? true : false

const icePrice =100
icePrice <=80 ? console.log("less than 80") : console.log("more than 80");
