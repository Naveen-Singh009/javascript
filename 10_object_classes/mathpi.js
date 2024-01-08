// console.log(Math.PI); // this is not overidden so
// Math.PI = 5

// for solving above problem we have this method
const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

const chai = {
    name : 'ginger chai',
    price : 250,
    isavailable : true,

    orderChai : function(){
        console.log("chai nhi bani");
    }
}
// by default the properties of this object is true
// writable = true; means any one can override it 

// we are protecting the object from overwriting so we 
// change the properties of the object 
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    writable : false,
    enumerable : false // this is for iteration //if is setted false we can not iterate in the object 
    //some property
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

//itrerating object 
for (let [key,value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    } 
}