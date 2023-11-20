const marvel = ["thor" , "ironman" , "spiderman"]

const dc = ["superman" , "flash" , "batman"]

// marvel.push(dc); //this will insert the dc array into the marvel array as an element


// console.log(marvel);
// console.log(marvel[3][2]);

// const arr = marvel.concat(dc) // return an array which is combination of elements 




//prefered
//spread array  -> elements spreads and breaks in singal entity
//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
const all_hero = [...marvel , ...dc]
// console.log(all_hero);


const newArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const usablenewArr = newArr.flat(Infinity); // convert in single array
// console.log(usablenewArr);

// console.log(Array.isArray("naveen")) //return false
// console.log(Array.from("naveen")) // conver the string into the array
// console.log(Array.from({name: "hitesh"})) // gives output as empty array because we have to definne that 
// which to convert the array the "key" or the "value"


let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));