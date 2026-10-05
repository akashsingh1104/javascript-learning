//Dates

let myDate = new Date()
console.log(myDate.toString()); //gives the current date and time in string format

console.log(myDate.toDateString()); //gives the current date in string format without time

console.log(myDate.toLocaleDateString()); //gives the current date in local date format
console.log(typeof myDate); //gives "object"

let myCreatedDate  = new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); //gives "Mon Jan 23 2023 it shows that the month is 0 based index so 0 is January, 1 is February and so on"

let myTimeStamp  = Date.now()
console.log(myTimeStamp); //gives the current timestamp in milliseconds since January 1, 1970
console.log(myCreatedDate.getTime()); //gives the timestamp of the created date in milliseconds since January 1, 1970


