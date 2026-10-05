//how to iterate object
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby'
}

for (const key in Myobject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)//  gives output as js shortcut is for javascript, cpp shortcut is for C++, rb shortcut is for ruby
}

//using for in looop on array
const programming =["js", "rb", "py", "cpp"]
for(const key in programming){
    console.log(key) //gives output as 0 1 2 3
}
for(const key in programming){
    console.log(programming[key]) //gives output as js, rb, py, cpp
}


//using for in loop on map
//for in loop doesnt work on map but we can use for of loop to iterate over map
//map is not iterable