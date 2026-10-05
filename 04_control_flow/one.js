//if

if (2 == "2"){
    console.log("executed");//gives executed

}
if(2==="2"){
    console.log("executed");//false statement no output   
}

const score =200
if(score>100){
    const power = "fly"
    console.log(`User power: ${power}`);//User power: fly
    
}
console.log(`User power: ${power}`);//power is not defined because it is out of scope

