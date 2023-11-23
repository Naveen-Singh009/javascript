const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// we can use map as foreach // it automatically returns values
// const newNums = myNumbers.map( (num) => num + 10 )
// const newNums = myNumbers.map( (num) => {num + 10 }) if we use scope and does not use return keyword it will give undefined 
// const newNums = myNumbers.map( (num) => {
//     return num +10
// })

// console.log(newNums); 


// +++++++++  chaining 

const newNums = myNumbers
                        .map( (num) => num*10 ) // the result of this map will be passed to second method in chaining
                        .map( (num) => num+1 )  // the value will be passed to next function after this 
                        .filter( (num) => num >=40) // we can chain as much as we want
   // in filter there is true or false game                      
console.log(newNums);