
function sayMyName(){
    console.log("N");
    console.log("a");
    console.log("v");
    console.log("e");
    console.log("e");
    console.log("N");
}

sayMyName // this is reference of function
// sayMyName() 

// function addTwoNumbers(num1 , num2){
//     console.log(num1 + num2 ); 
// }

// function addTwoNumbers(num1 , num2){
//     let result = num1+num2
//     return result
// }
function addTwoNumbers(num1 , num2){
    return num1+num2
}

const result = addTwoNumbers(3, 5)
// console.log("result" ,result)


// function loginUserMessage(username){
function loginUserMessage(username = "Sam") { // default value
    // if(username === undefined){
    if(!username){
        console.log("please enter a user name");
        return
    }
    return `${username} just logged in`
}

const str = loginUserMessage("Naveen") // if we does not pass anything then value is undefined

// console.log(str);



//rest operator // passing multiple values in argument
// function calculateCartPrice(...num){ // it includes these values into an array
//     return num
// }
function calculateCartPrice(val1 , val2 , ...num){ //first and second value goes to their respective parameters and all others are in array 
    return num  //
}

// console.log(calculateCartPrice(12,43,43,533,644,890));


const user = {
    username : "Naveen",
    price : 1223
}

function handleObject (anyobject){ // passing objects into parameter
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username : "Neen",
//     price: 7888
// })


//passing arrays as argument
const myNewArr = [2,4,1,55,12]
function returnSec(getArray){
     return getArray[2]
}

// console.log(returnSec(myNewArr));
console.log(returnSec([23,444,534,532]));