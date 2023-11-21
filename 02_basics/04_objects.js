// const tinderUser = new Object() // singleton object 
const tinderUser = {} // non singleton object

 tinderUser.id = "123abc"
 tinderUser.name = "Ajay"
 tinderUser.isLoggedInd = false


// console.log(tinderUser);


//defining nested objects
const regularUser = {
    email : "nav@gmail.com",
    fullName : {
        userfullname: {
            firstName : "hitesh",
            lastname : "gusain",
        }
    }
}
//accessing nested objects using . operator
// console.log(regularUser.fullName.userfullname);


const obj1 = {
   1: "a",
   2: "b"
}

const obj2 = {
    3 : "a",
    4 : "b"
}

// this will combine object inside object
const obj3 = {
    obj1, obj2
}
// console.log(obj3);


const obj4 = Object.assign(obj1, obj2) //  this will combine the object element in one object 
// another way of doing this is 
// it guranteed that element will be combined
const obj5 = Object.assign({} , obj1, obj2) // {} is optional but it is good practice
// console.log(obj4); // {} is treated as target and all other are source
// console.log(obj5);


 const obj6 = {...obj1, ...obj2 } //spread operaor 
//  console.log(obj6);

const users= [
    {
        id : 1,
        email: "gusain@gmail.com"
    }, 
    {
        id : 1,
        email: "gusain@gmail.com"
    }, 
    {
        id : 1,
        email: "gusain@gmail.com"
    }, 
    {
        id : 1,
        email: "gusain@gmail.com"
    }, 
    {
        id : 1,
        email: "gusain@gmail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //returned datatype is array // we can use this easily
console.log(Object.values(tinderUser)); //returned datatype is array // we can use this easily
console.log(Object.entries(tinderUser)); //returned datatype is array // we can use this easily
// array inside array keys and value makes one array and all key value pairs will be different diff array



// if value does  exist or not in object 
console.log(tinderUser.hasOwnProperty("isLoggedIn"));




