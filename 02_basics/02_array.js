const marvel_heroes =["thor", "spider", "ironman"]
const dc_heroes = ["batman","superman", "flash"]

marvel_heroes.push(dc_heroes)

console.log(marvel_heroes) // output: ["thor", "spider", "ironman", ["batman","superman", "flash"]]

console.log(marvel_heroes[3][1]);//gives superman , but it is not a good syntax

const allHeros = marvel_heroes.concat(dc_heroes) // we can push or pop on existing array but to use concat we need to save it in new array

console.log(allHeros);//output:["thor", "spider", "ironman","batman","superman", "flash"]

const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros)



const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.


console.log(Array.isArray("hitesh"));//return true of false
console.log(Array.from("hitesh")); // creates an array from an iterable object


let score1 =100
let score2 =200
let score3 = 300
console.log(Array.of(score1,score2,score3)) //gives [100,200,300]
