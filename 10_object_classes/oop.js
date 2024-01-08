// // object litral
// const user = {
//    username : "Naveen",
//    loginCount : 8,
//    signedIn : true,
   
//    getUserDetails : function(){
//     // console.log("got the user details ");
//     console.log(`username: ${this.username}`);
//    }
// }

// console.log(this); // this will give empty {} because there is nothing in global context
// console.log(user.username);
// console.log(user.getUserDetails());


//// constructor function

// const promiseOne = new Promise() // this new word is new context  constructor function

function user(username , loginCount, isloggedin){
    this.username = username
    this.isloggedin = isloggedin
    this.loginCount = loginCount
    this.greeting  = function(){
        console.log(`welcome ${this.username}`);
    }

    // return this // if we do  not write return this it implilcitly returns
}


const userOne = user("naveen", 12, true)
const usertwo = user("chai or code", 22, false) // this line will override the data of of userone 
// now if we print userone the data will be new overriden data which is done by usertwo
// thats why we have to use new keyword
// const userOne = new user("naveen", 12, true)
// const usertwo = new user("chai or code", 22, false)
// console.log(userOne);
// console.log(usertwo);
// constructor function (this) gives every time a new instance

// steps
// when new is written a new empty object is created {}
// a constructor function is called due to new keyword
// all argument injected in this keyword
// now function is ready

console.log(userOne.constructor);
