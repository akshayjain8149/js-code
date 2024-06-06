//primitive

//7 types = Sring , Number , Boolean , null ,undefined, Symbol(Any value manke Unique), BigInt 
//Example
const score = 100 //number
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
}
