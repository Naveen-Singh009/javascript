const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function(){ //this referes to current context
        console.log(`${this.username} ,welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// Arrow functions

// function chai(){
//     let username = "naveen"
//     console.log(this.username); // undefined only works on objects not on functions
// }

// chai()


const chai = () =>{
    let username = "Naveen"
    // console.log(this.username); //undefined 
    console.log(this); //empty
}
// chai()


// const addTwo1 = (num1, num2) => {
//     return num1+num2
// }

// console.log(addTwo1(34,22));

//we can write arrow functions like this
// const addTwo1 = (num1, num2) => num1+num2
// const addTwo1 = (num1, num2) => (num1+num2)  // if we wrap this on () no need to write return



const addTwo1 = (num1, num2) => ( {userName : "Naveen"})  // returning object through arrow function

// console.log(addTwo1(34,22));


