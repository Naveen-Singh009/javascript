
const coding = ["js", "rb" , "py", "java", "cpp"]


// for each takes call back function as argument
// callback function doesnot have any name


//foreach coding array ke item ko ek ek krke apne call back function ke argument 
// me laayega 
// the we can perform any operation on that item
// coding.forEach( function (item) {
//      console.log(item);
// } )



// we can use arrow functionn as callback function
// coding.forEach( (val) => {
//     console.log(val);
// })



function printMe(item) {
    console.log(item);
}
// we can pass a predefined function as callback function
// reference of the function is passed as callback function
// coding.forEach(printMe)


// forEach have other access other than item 
// like index , arr ki list
// coding.forEach(( item , index, arr) => {
//     console.log(item, index, arr);
// } )



const myCoding = [
    {
        langName : "javascript",
        langFile : "js"
    },
    {
        langName : "java",
        langFile : "java"
    },
    {
        langName : "python",
        langFile : "py"
    },
]

// iterating on this 
myCoding.forEach((item)=> {
    console.log(item.langName);
})