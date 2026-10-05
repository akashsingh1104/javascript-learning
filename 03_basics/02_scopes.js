//{} curly braces ko hi scope bola jaata h jab ye kisi function ya if else k saath aata h
var c=300
if (true) {
    let a =10
    const b= 20
    var c =30
}
console.log(a); //shows not declared a
console.log(b);// shoes not declared b
console.log(c); //gives 30 but it should have give 300 because that was declared in global scope and the one declard in if(block scope) shouldnt be printed

//********Nested scope **************8 */

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);        
    }
    console.log(website);//gives error because it is outside of scope
    //oopar error aagya isliye neeche waali line kbhi execute hogi nhi
    two() //now it gives: hitesh
}
one()


if(true){
    const username ="hitesh"
    if(username=="hitesh"){
        const website = "yotube"
        console.log(username + website);//gives hitesh yotube
    }
    console.log(website) //gives error
}
console.log(username); //gives error



//*************Interesting **********/
//1.if we declare function like this then:

console.log(addone(5)) //it will give 6 without error

function addone(num){
    return num +1
}

//2. but if we declare function like this and try to write console before declaration then it will give error

console.log(addtwo(5))
const addtwo = function(num){
    return num +2
}