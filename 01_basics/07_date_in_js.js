//dates

let myDate = new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString()); 
// console.log(typeof myDate);


//month starts from 0
// let myCrDate = new Date(2023, 0 , 23)
// let myCrDate = new Date(2023, 0 , 23, 5, 3)
// let myCrDate = new Date("2023-01-14")
let myCrDate = new Date("01-14-2023")
// console.log(myCrDate.toLocaleDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCrDate.getTime()); //time i mili seconds
// console.log(Math.floor(Date.now()/1000)); //time in seconds

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());


// `${newDate.getDay()} and time`

newDate.toLocaleDateString('default', {
    weekday: "long",
})

