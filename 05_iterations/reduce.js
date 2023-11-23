const myNums = [1,2,3]
// this is used in calculating the cartItem prices
// const myTotal = myNums.reduce( function (acc, currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal 
// } , 0)    //  0 is the starting value of accumulator acc
// acc : 0 and currVal : 1
// acc : 1 and currVal : 2
// acc : 3 and currVal : 3
// mytotal =  6
// console.log(myTotal);


//reduce using arrow function 
const myTotal = myNums.reduce( (acc, currVal) => acc + currVal , 0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js - course",
        price : 2999
    },
    {
        itemName : "py course ",
        price :  999
    },
    {
        itemName : "mobile Dev course ",
        price :  5999
    },
    {
        itemName : "Data-Science",
        price :  12000
    },
]

//adding all the prices of the objects 
const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price , 0)
console.log(priceToPay);