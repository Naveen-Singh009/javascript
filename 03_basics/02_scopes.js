
// var c = 32
// let a = 700
if(true){
    let a = 20 
    const b = 33
    var c = 90
    console.log("inner" , a);
}

// console.log(a); //not accessable
// console.log(b); 
console.log(c); // var is accessible

function one() {
    const username = "naveen"

    function two() {
        const wesite = "utube"
        console.log(username);

    }
    // console.log(wesite);
    two()
}

// one()


if(true){
    const username = "Naveen"
    if(username === "Naveen"){
        const wesite = "YOutueb"
        console.log(username + wesite);
    }
    // console.log(wesite); // error
}
// console.log(username); //error


// ++++++++++++intresting ++++++++++++
console.log(addone(44)); //accessinble when we only declare

function addone(num){
    return num+1;
}

// const num = addone(55)
// console.log(num);
// addTwo(33) // not accessible when we initilize the function while declaring
const addTwo = function(value){
    return value + 4
}

// console.log(addTwo(32));


