// for of loop //array and object specific loops

// ["", "" , ""]
// [{}, {} , {}]

const arr = [1,2,3,4,5,6]

// for (const i of arr) { //iterate over element
//     console.log(i);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) { // itrate over every char
//     console.log(`each char is ${greet}`)
// }


//Maps
// no duplicate values only unique values
// values are stroed in key value pair 
const map = new Map()
map.set('IN' , "India")
map.set('USA', "America")
map.set('fr' , "France")
map.set('fr' , "France") // if we try to insert duplicate value it fails nothing change happend
// console.log(map);

// for (const key of map) {
//     console.log(key); // it will print all the key value insert in an arra0y

// }

// for accessing key and value saperately in an map 
// we use 
for (const [key , value] of map) {
    console.log(key,' : ', value);
}


// const myObject = {
//     "game1" : "NFS",
//     "game2" : "PUBG"
// }

// for (const [key, value] of myObject) { // this will give error because this is not iterateable
//     console.log(key, value);
// }






