//truthee values

// const userEmail = "Naveen@gm" // assuming that value inside the string is true
// const userEmail = "" // assuming that value inside the string is false empty



// if(userEmail){
//     console.log("got users email");
// }else{
//     console.log("dont have email");
// } 

// falsy values 
// false , 0 , -0 , BigInt 0n, "", null, undefined , NaN

// other thab these all values are thruthy values 
// truthy values 
// "0" -> true
// 'false' -> true 
//" " -> true , [] , {} , function(){}(empty fun)



// const userEmail = [] 
// if(userEmail.length === 0){
//     console.log("empty array");
// }

// const emObj = {}
// if(Object.keys(emObj).length === 0){ //object.keys(emObj) gives the array of object's keys
//     console.log("obj is empty");  
// }



// NUllish Coalencing Operator (??) : only used for null and undefined

let val1 ;
// val1 = 7 ?? 10  
// val1 = null ?? 10 // this operator is used for safty check for null and undefined value
// val1 = 10

// val1 = undefined ?? 15  


val1 = null ?? 10 ?? 16  // first value is assigned except null  10 will be assigned 

// console.log(val1);


// terniary operator 
// condition ? true : false 

const iceTea = 100 
iceTea <= 80 ? console.log("less then 80") : console.log("more than 80");
