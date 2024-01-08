//for loop
for (let i = 0; i <=10; i++) {
    if(i == 5){
        // console.log("5 is best number");
    }
    // console.log(i);   
}
// i will not accessible outside of the loop


for(let i = 1 ; i <= 10 ; i++){
    // console.log(`outer loop : ${i}`);
    for(let j = 1 ; j <= 10 ; j++){
        // console.log(`inner loop : value ${j} and outer loop ${i}`);
        console.log(i + '*' + j + '= ' + i*j);
    }
}

let myArr = ["flash" , "batman" , "superman"]
// console.log(myArr.length);
for(let i = 0 ; i < myArr.length ; i++){
    const element = myArr[i]
    // console.log(element);
}


// break and continue
for(let i = 1 ; i <= 20 ; i++){

    // if(i == 5){
    //     console.log("oops its 5.. breaking");
    //     break
    // }

    // if(i==5){
    //     console.log("continue form the start again....555");
    //     continue
    // }

    // console.log(`value of i is ${i}`);
}