/* two execution context:
1.Global execution context
2. Function execution context 

Suppose we have a code:-
let val1=10
let val2=5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1= addNum(val1,val2)
let result2 = addNum(10,2)*/

/*1. Sabse phle code global execution se run hota h isko this se  allocate krte h 

2.Memory phase
val1 usme hoga -> undefined
val2 -> undefined
addNum m jayegi-> definition
result1-> undefined
result2 -> undefined
 
3.Execution Phase
 val1 m jayegi <- 10
 val2<- 5
 addNum apna alag exection context banata h jisme ek box banega jisme hoga new variable environment aur execution thread aur ab 2 phase dubara se honge jo ki h memory phase and execution phase. ye har function pe hoga
 
 Memory phase:-
 val1 -> undefined
 val2 -> undefined
 total-> undefined
 
 3. Execution phase
 num1<- 10
 num2 <- 15
 total <- 15  ..ye total return ho jayega global execution m

 ye sab kaam hone k baad ye wala execution phase delete ho jaata h


 iske baad wapas original execution phase 
result1=15
iske baad result2 dubara se new variable enviroment aur thread bnayega and process will go on
 */