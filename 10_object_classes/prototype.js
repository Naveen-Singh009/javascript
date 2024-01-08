// let myName = "  Naveen   "
// console.log(myName.trueeLength);



let myHeros = ["thor", "spiderMan"]


let heroPower = {
    thor : "hammer",
    spiderMan : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderMan}`);
    }
}


Object.prototype.naveen = function(){
    console.log(`naveen is present in all object`);
}

Array.prototype.heyNaveen = function(){
    console.log("naveen says hello0");
}

// heroPower.naveen() // if we give power to object then every one can access it
// myHeros.naveen();

// myHeros.heyNaveen()
// heroPower.heyNaveen(); // if we give power to  array  then the object cant access it 



///// Inheritance 


const user = {
    name : 'chai',
    email : 'chai@google.com'
}
const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment : 'js Assignment',
    fullTime : true,
    __proto__ : TeachingSupport // borrowing the properties of Teachingsupport (inheritance) we can also write it outside of the object 
}
Teacher.__proto__ = user 


// Modern syntax
//directly access object of __proto__

Object.setPrototypeOf(TeachingSupport, Teacher)
// teachingsupport will access all the properties of teacher


let anotherUsername = "chaiorcode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherUsername.trueLength()

"naveennnn  ".trueLength()
"iceTea  ".trueLength()
