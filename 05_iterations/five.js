const coding =["js","ruby","python","cpp"]

coding.forEach(function (val){
    console.log(val);
    //gives output js ruby python cpp
    //callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
})

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr); //gives output as js 0 [ 'js', 'ruby', 'python', 'cpp' ] ruby 1 [ 'js', 'ruby', 'python', 'cpp' ] python 2 [ 'js', 'ruby', 'python', 'cpp' ] cpp 3 [ 'js', 'ruby', 'python', 'cpp' ]
    
})

