//immediately invoked function expression

(function chai() { // this is named iife
    console.log(`Db connected`);
})(); // this function will invoked immediately
// for ending the execution of this function we use semicolon ;
//for removing the pollution of global scope variables we use iife function

// iife function using arrow function
( (name) => { 
    console.log(`Db connected two ${name}`);
}) ('Naveen') ; // passing parameter to iife function

