// for of
for (const element of object) { //here object doesnt mean that this loop will only apply on object here it means kispe loop lgega   
}

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num); //gives 1 2 3 4 5
}

const greetings = "Hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}


//Maps : only takes unique value and will be in order as given

const map =new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map) //gives output as Map(3) { 'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France' }

//applying for of loop on map

for (const key of map) {
    console.log(key)//gives output as [ 'IN', 'India' ] [ 'USA', 'United States of America' ] [ 'Fr', 'France' ]
    //it gives output as array of key and value pair
}
//if we want to get only key or value we can use map.keys() or map.values()

//if we want to get output as different format we can use destructuring
for (const [key, value] of map) {
    console.log(`${key} is for ${value}`)//gives output as IN is for India, USA is for United States of America, Fr is for France
}

//for of loop doesnt work on objects but we can use for in loop to iterate over object