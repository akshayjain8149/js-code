/*const name = "akshay"
const repocount = 50
console.log("my name is",name + "repocount is",repocount);//outdate
console.log(`hello my name is ${name} and repocount is ${repocount}`);string interpination

const gameName = new String('hiteshhc')//declare
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());*/
const gameName = new String('hitesh-hc')
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const another = gameName.slice(-7,4)
console.log(another);

const newStringOne = " akshay  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https:/akshay.com/akshay%20jain"

console.log(url.replace('%20','-'));

console.log(url.includes("akshay"))

console.log(gameName.split('-'))