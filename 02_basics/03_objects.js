// singleton object  //Object.create
// through litterals -> no singleton
//through constructor -> singleTon object is creted


const mySym = Symbol("key1")



// object litrals 

const jsUser = {
      name : "Naveen",
      "full Name" : "Arjun",
      [mySym] : "mykey1", // if we want to create a symbol as key we have to do this 
      age : 23,
      location : "Jaipur", 
      email : "naveen@gmail.com",
      isLoggedIn : false,
      lastLoginDays : ["Monday" , "Saturday"]
}

// accesing objects 

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]); // accessing the symbol key using square bracket
// console.log(typeof jsUser.mySym);


// jsUser.email = "hiteshJoshi@gmail.com"
// Object.freeze(jsUser) // it will freeze the object  after this we cannot perform any changes in the objects
// jsUser.email = "Naveenwill#1233"

// console.log(jsUser)


// // adding function in objects
// jsUser.greeting = function(){
//     console.log("hello js user");
// }


// jsUser.greetingtwo = function(){
//     console.log(`hello js user , ${this.name}`);
// }

// // we can use both greeting and greeting()
// console.log(jsUser.greeting); // reference of function
// console.log(jsUser.greeting()); 
// console.log(jsUser.greetingtwo());


