//arrays

const myArr = [0,1,2,3,4,5]

const myH = ["shaktiman" , "nagraj"]

const myArr2 = new Array(1,2,3,4,5)

// console.log(myArr[0]);


// myArr.push(6)
// myArr.push(9)
// myArr.pop()

// myArr.unshift(9)  // this element is added to start so shifting takes place
// myArr.shift()  // it will remove the shifted value (or the first value)


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(5)); // if not present then the result will be -1

// const newArr = myArr.join() // binds the array and convert into string coma seperated
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


console.log("A " , myArr);
const myn1 = myArr.slice(1,3) // this does manupulate original array //3 excluded

console.log(myn1);
console.log("B " , myArr);

const myn2 = myArr.splice(1,3) // this method removes the part of array from the original array
//mainupulate the original array
console.log(myn2); // including 3

console.log("c" , myArr);


