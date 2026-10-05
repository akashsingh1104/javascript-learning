//reduce , acc is accumulator,currval is current value
const myNums = [1,2,3]
const myTotal = myNums.reduce(function (acc,currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},0) //ye zero btata h ki accumulator start kaha se hoga
console.log(myTotal);//gives 6

//lets try this to write in arrow function
const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal)//gives 6