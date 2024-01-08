function SetUserName(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUserName(username) // actually me yeh call nhi ho raha hai
    //for calling this mehtod explicitly use call method

    SetUserName.call(this,username)// holding the reference ot this function
    this.email = email
    this.password = password
}

const chai = new createUser("nav", "nav@fb.com", "2121")
console.log(chai);