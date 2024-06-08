//primitive

//7 types = Sring , Number , Boolean , null ,undefined, Symbol(Any value manke Unique), BigInt 
//Example
/*const score = 100 //number
const scorevalue =100.3 //number
const isLoggedIn =false //Boolean
const outsidetemp = null //null
let useremail; //undefined

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bignumber = 123456789456n // BigInt

//Non Primitive or Reference type :
//Array , Objects , Functions

const heros = ["abc", "asd" ,"aef"];

let myObj={name : "akshay", age:28}

const myFunction = function () {
    console.log("Hello World")
}*/


//--------------------------------------------

//Stack Memory(Primitive) and heap memory(Non-Primitive)

//Stack Example
/*let myStack = "Akshayjain"
let mystack1 = myStack;
mystack1 = "jainkashay"
console.log(myStack);
console.log(mystack1);*/

//Heap Example
let userOne ={
    email: "akshay@gmail.com",
    upi: "user@ybl"
}
let usertwo = userOne
console.log(usertwo);
console.log(userOne.email);
usertwo.email = "aj@gmial.com"
console.log(userOne.email);
console.log(usertwo.email);

