console.log("2">1); //return true because js already converted it into number
console.log("02">1);
// whenever comparing make sure datatype is same

console.log(null>0); // false
console.log(null==0); //false
console.log(null>=0);/// true
// reason is that equality check and comparison works differently ,comparisons convert null to a nmbr, treating it as 0, thats why >= works 


// === strict check checks also datatype
