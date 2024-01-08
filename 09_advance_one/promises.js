// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task 
//     // DB calls , cryptoGraphy, network

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve() // this is used to connect the async and then 
//     }, 1000)
// })  // promise is created now we have to consume it 

// // consumption
// // with the help of then
// promiseOne.then( function(){
//     console.log("promise consumed");
// })


// // the task which we have done in two step above 
// // we can do this with single step with the help of following techinque
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 7000)
// }).then(function(){
//     console.log("async2 resolved")
// })


// passing the data which came from network
// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Naveen", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//    console.log(user);
// })



// resolving errors 
// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         // let error = true;
//         let error = false;
//         if(!error){
//             resolve({username: "Van", Password : "12121"})
//         }else{
//             reject('Error: somethind is wrong')
//         }
//     }, 1000)
// })
// //callback hell // we can write multiple then and catch 
// // const username  = promiseFour.then((user)=>{ // this is not allowed
// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{ // we can use channing // the vaule returned by above .then we can use that value
//     console.log(username);
// }).catch(function(error){ // we are using reject so we have to use catch 
//     console.log(error);
// })// we will face multilple situations when we have to use finallyu
// .finally(()=> console.log("the promise is either resolved resolved or rejected"))


// we can also handel promise using async await
// const promiseFive  =  new Promise(function(resolve, reject){
//     setTimeout(function(){
//                 let error = true;
//                 if(!error){
//                     resolve({username: "javascript", Password : "12121"})
//                 }else{
//                     reject('Error: js is wrong')
//                 }
//             }, 1000)
// })
// // promise is an object  // if rejected then it will give error so we have to wrap it with tey catch block 

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(Error);
//     }
// }
// consumePromiseFive() 


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()  // this response.json will also take time for conversion so we have to await it 
//         console.log(data);
//     } catch (error) {
//         console.log('Error : ', error);
//     }
// }
// getAllUsers()


// writing same function(above function) using .then and .catch format
fetch('https://api.github.com/users/hiteshchoudhary') // fetch always execute first beacuse a priority queue is created specially for fetch
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error)=> console.log(error))



