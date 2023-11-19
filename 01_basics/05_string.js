const name = "Naveen"
const repoCount = 23

// console.log(name+ repoCount+ "value");


//this is known as string interpolation
console.log(`hello my name is ${name} and my repoCount is ${repoCount} `);


const gameName = new String("Naveen-Gaming")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('G'));

const newGame = gameName.substring(0, 4)// if we give -ve value in the it will ignore the value and start from  0  

// console.log(newGame);

const game2 = gameName.slice(-12, 4) // this gives from backside
// console.log(game2);


const newStr = "  naveen   "
console.log(newStr);

console.log(newStr.trim())  //removes all the spaces from the string onlu works on white spaces and line terminators

const url  = "https://naveen.com/naveen%20gusain"

console.log(url.replace("%20" , "-"));

console.log(url.includes("nav"));
console.log(url.includes("vidhya"));


console.log(gameName.split("-"));


