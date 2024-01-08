const myObj = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for iterating objects we use forin loop
// for (const key in myObj) {
//     console.log(`${key} shourtcut is for ${myObj[key]}`);
// }


// if we use forin loop in array it only gives keys
const programming = ["js", "rb" , "py", "java", "cpp"]
for (const key in programming) {
    // console.log(key); // keys only // index 
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN' , "India")
map.set('USA', "America")
map.set('fr' , "France")

for (const key in map) {// map is not iteratable so we can't write map like this 
    // nothing will happend // nothing in output
    // console.log(key);
}




