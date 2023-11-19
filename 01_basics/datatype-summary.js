// primitive

// 7 types : string, number , boolean , null , udefined, symbol, BigInt

// JavaScript is both dynamic typed language
const score  = 100
const scoreValue = 200.43

const isLoggedIn = false
const outSideTemp = null
let userEmail ;


const id = Symbol('222')
const anotherId = Symbol("222")
console.log(id == anotherId);

const bigNumber = 1232232342452445343543n
console.log(typeof bigNumber);




//Reference type(Non primitive)
// Arrays, Objects, Functions, 

const heros = ["shaktiman" , "naagraj" , "doga"];

let myObj ={
    name :"Naveen", 
    age : 23,
    rank : 11, 
}

const myFun = function(){
    console.log("hello world");
}

myFun()

console.log(typeof myFun); // function oject 