// primitive

// 7 types : string, number , boolean , null , udefined, symbol, BigInt

// JavaScript is both dynamic typed language
const score = 100
const scoreValue = 200.43

const isLoggedIn = false
const outSideTemp = null
let userEmail ;


const id = Symbol('222')
const anotherId = Symbol("222")
// console.log(id == anotherId);

const bigNumber = 1232232342452445343543n
// console.log(typeof bigNumber);




//Reference type(Non primitive)
// Arrays, Objects, Functions, 

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj ={
    name :"Naveen", 
    age : 23,
    rank : 11
}

const myFun = function(){
    console.log("hello world");
}

// myFun()

// console.log(typeof myFun); // function oject 



//+++++++++++++++++ Memories ++++++++++++

// stack(primitive) , Heap (Non- primitive)


let myCh = "naveengusain0" //example

let anothech = myCh
// console.log(anothech);

anothech = "thisIsMych"
// console.log(anothech);

let userOne = {
    email : "email.com",
    upi : "naveengusian",
}

let userTwo = userOne
userTwo.email = "gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
